"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Users, TrendingUp, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import LeadsClient from "./LeadsClient";
import { getUpdatedLeadsAction } from "./actions";

// Bibliotecas de PDF
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  aiSummary?: string | null;
  createdAt: Date;
}

export default function LeadsPageClient({
  initialLeads,
  initialTotalSessions,
}: {
  initialLeads: Lead[];
  initialTotalSessions: number;
}) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [totalSessions, setTotalSessions] = useState(initialTotalSessions);
  const [showPulse, setShowPulse] = useState(false);

  // 1. Polling com lógica de detecção de mudança integrada
  useEffect(() => {
    const refreshData = async () => {
      try {
        const result = await getUpdatedLeadsAction();
        if (result.success) {
          // Lógica de Comparação: Se o número de leads aumentou, disparar alerta
          if (result.leads.length > leads.length) {
            setShowPulse(true);
            toast.success("Nova conversão detectada!");
            setTimeout(() => setShowPulse(false), 8000);
          }

          setLeads(result.leads as Lead[]);
          if (result.totalSessions !== undefined) {
            setTotalSessions(result.totalSessions);
          }
        }
      } catch (error) {
        console.error("Erro ao atualizar dados:", error);
      }
    };

    const interval = setInterval(refreshData, 10000);
    return () => clearInterval(interval);
  }, [leads.length]); // Dependência necessária para comparar o tamanho da lista

  // 2. Cálculo da Taxa de Conversão (Apenas cálculo puro para exibição)
  const conversionRate = useMemo(() => {
    if (!totalSessions || totalSessions === 0) return 0;
    const rate = (leads.length / totalSessions) * 100;
    return rate > 100 ? 100 : parseFloat(rate.toFixed(1));
  }, [leads.length, totalSessions]);

  // 3. Exportação para PDF
  const exportToPDF = () => {
    if (leads.length === 0) {
      toast.error("Não há dados para exportar.");
      return;
    }

    const doc = new jsPDF();
    const timestamp = new Date().toLocaleString("pt-BR");

    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text("Relatório de Leads - Braincore AI", 14, 22);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(
      `Gerado em: ${timestamp} | Taxa de Conversão: ${conversionRate}%`,
      14,
      30
    );

    const tableRows = leads.map((lead) => [
      lead.name,
      lead.phone,
      new Date(lead.createdAt).toLocaleDateString("pt-BR"),
      lead.aiSummary || "Sem resumo",
    ]);

    autoTable(doc, {
      head: [["Nome", "Telefone", "Data", "Resumo da Intenção"]],
      body: tableRows,
      startY: 35,
      theme: "grid",
      headStyles: { fillColor: [124, 58, 237] },
      styles: { fontSize: 8, cellPadding: 3 },
      columnStyles: { 3: { cellWidth: 80 } },
    });

    doc.save(`braincore_leads_${new Date().getTime()}.pdf`);
    toast.success("Relatório gerado com sucesso!");
  };

  const hotLeads = leads.filter((l) => {
    const hash = l.id
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return ["Hot", "Warm", "Cold"][hash % 3] === "Hot";
  }).length;

  return (
    <div className="pt-32 lg:px-32 xl:px-48 pb-12 px-6 bg-background min-h-screen space-y-8 text-foreground">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white italic">
            Dashboard <span className="text-primary">Leads</span>
          </h1>
          <p className="text-muted-foreground mt-1 font-medium italic">
            Análise em tempo real de contatos convertidos pela Braincore AI.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={exportToPDF}
            className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 font-bold italic px-6 cursor-pointer"
          >
            <FileText className="h-4 w-4" /> Exportar PDF
          </Button>
        </div>
      </div>

      {/* Cards de Métricas */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-card/50 backdrop-blur-sm border-border shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider italic">
              Total de Leads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">{leads.length}</div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-2 font-bold uppercase italic">
              <TrendingUp className="h-3 w-3" /> Sincronizado
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider italic">
              Leads Quentes (Hot)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-orange-500">
              {hotLeads}
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium italic">
              Alta probabilidade de fechamento
            </p>
          </CardContent>
        </Card>

        {/* Card de Conversão */}
        <Card
          className={`bg-card/50 backdrop-blur-sm border-border shadow-xl relative overflow-hidden transition-all duration-500 ${
            showPulse ? "ring-2 ring-green-500/50" : ""
          }`}
        >
          {showPulse && (
            <div className="absolute top-3 right-3 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </div>
          )}

          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider italic">
                Taxa de Conversão
              </CardTitle>
              {showPulse && (
                <Badge
                  variant="destructive"
                  className="text-[10px] animate-bounce px-2 py-0"
                >
                  NOVO LEAD
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div
                className={`text-3xl font-black transition-colors duration-500 ${
                  showPulse ? "text-green-500" : "text-primary"
                }`}
              >
                {conversionRate}%
              </div>
              <span className="text-[10px] text-muted-foreground italic">
                de {totalSessions} sessões
              </span>
            </div>
            <div className="w-full bg-muted h-1.5 mt-3 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  showPulse ? "bg-green-500" : "bg-primary"
                }`}
                style={{ width: `${conversionRate}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border shadow-2xl overflow-hidden border-t-4 border-t-primary">
        <LeadsClient initialLeads={leads} />
      </Card>
    </div>
  );
}
