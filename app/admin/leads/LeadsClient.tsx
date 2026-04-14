"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Search,
  MessageSquare,
  Zap,
  Trash2,
  AlertTriangle,
  Inbox,
  Sparkles,
} from "lucide-react";
import { deleteLeadAction } from "./actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
// IMPORTAÇÃO DO TOOLTIP
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

interface Lead {
  id: string;
  name: string;
  phone: string;
  aiSummary?: string | null;
  createdAt: Date;
}

export default function LeadsClient({
  initialLeads,
}: {
  initialLeads: Lead[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [now, setNow] = useState(new Date());

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prevLeadsCount = useRef(initialLeads.length);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3"
    );
    audioRef.current.volume = 0.4;
  }, []);

  useEffect(() => {
    if (initialLeads.length > prevLeadsCount.current) {
      audioRef.current?.play().catch(() => {
        console.log("Interaja com a página para habilitar o som.");
      });
      toast.info("Novo Lead captado pela Braincore!");
    }
    prevLeadsCount.current = initialLeads.length;
  }, [initialLeads.length]);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredLeads = useMemo(() => {
    return initialLeads.filter((lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [initialLeads, searchTerm]);

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteLeadAction(id);
      if (result.success) {
        toast.success("Lead removido com sucesso!");
      } else {
        toast.error("Erro ao excluir.");
      }
    } catch (error) {
      toast.error("Falha na conexão.");
    }
  };

  const getLeadScore = (id: string) => {
    const scores = ["Hot", "Warm", "Cold"];
    const hash = id
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return scores[hash % scores.length];
  };

  return (
    <TooltipProvider>
      {" "}
      {/* Provider necessário para envolver os Tooltips */}
      <div className="p-6 border-b border-border bg-card/80 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-background/50 border-primary/10 focus-visible:ring-primary h-11 text-white"
          />
        </div>
        <Badge
          variant="outline"
          className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary italic font-bold uppercase tracking-wider"
        >
          {filteredLeads.length} Leads Encontrados
        </Badge>
      </div>
      <div className="overflow-y-auto overflow-x-auto h-[500px] scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
        <Table>
          <TableHeader className="bg-muted/90 backdrop-blur-md sticky top-0 z-10 shadow-sm">
            <TableRow className="border-border hover:bg-transparent uppercase font-black italic text-[11px] tracking-widest">
              <TableHead className="py-5 min-w-[180px]">Cliente</TableHead>
              <TableHead className="min-w-[120px]">Score IA</TableHead>
              <TableHead className="min-w-[250px]">
                Resumo da Intenção
              </TableHead>
              <TableHead className="min-w-[150px]">Contato</TableHead>
              <TableHead className="min-w-[120px]">Data</TableHead>
              <TableHead className="text-right min-w-[130px]">Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => {
                const score = getLeadScore(lead.id);
                const isNew =
                  now.getTime() - new Date(lead.createdAt).getTime() < 30000;

                return (
                  <TableRow
                    key={lead.id}
                    className={cn(
                      "border-border hover:bg-primary/5 transition-all group relative",
                      isNew && "bg-primary/10 border-y-primary/30"
                    )}
                  >
                    <TableCell className="relative">
                      {isNew && (
                        <div className="absolute left-0 top-0 w-[3px] h-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)] animate-pulse" />
                      )}
                      <div className="flex flex-col">
                        <span className="font-bold text-base text-white truncate max-w-[160px]">
                          {lead.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono italic tracking-tighter">
                          ID: {lead.id.slice(-8)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={cn(
                          "font-black italic px-3 uppercase text-[10px] border",
                          score === "Hot"
                            ? "bg-orange-500/10 text-orange-500 border-orange-500/30"
                            : score === "Warm"
                            ? "bg-blue-500/10 text-blue-500 border-blue-500/30"
                            : "bg-slate-500/10 text-slate-400 border-slate-500/30"
                        )}
                      >
                        {score === "Hot" && (
                          <Zap className="h-3 w-3 mr-1 fill-current animate-pulse text-orange-500" />
                        )}
                        {score}
                      </Badge>
                    </TableCell>

                    {/* COLUNA DE RESUMO COM TOOLTIP */}
                    <TableCell>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-2 max-w-[280px] cursor-help">
                            {lead.aiSummary ? (
                              <Sparkles className="h-4 w-4 text-orange-400 shrink-0 opacity-70" />
                            ) : (
                              <MessageSquare className="h-4 w-4 text-primary shrink-0 opacity-70" />
                            )}
                            <span className="text-sm font-medium text-muted-foreground italic truncate block">
                              {lead.aiSummary || "Analisando intenção..."}
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-card border-primary/20 text-white p-3 max-w-xs shadow-xl"
                        >
                          <p className="text-xs italic leading-relaxed">
                            {lead.aiSummary || "Sem resumo disponível."}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TableCell>

                    <TableCell className="font-mono text-sm text-primary font-bold">
                      {lead.phone}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground font-bold italic">
                      {new Date(lead.createdAt).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-3">
                        {/* Botão WhatsApp */}
                        <Button
                          size="icon"
                          className="bg-emerald-600 hover:bg-emerald-500 h-9 w-9 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                          asChild
                        >
                          <a
                            href={`https://wa.me/${lead.phone.replace(
                              /\D/g,
                              ""
                            )}?text=Olá ${lead.name}, aqui é da Braincore!`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaWhatsapp className="h-4 w-4 text-white" />
                          </a>
                        </Button>

                        {/* Diálogo de Exclusão */}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-card border-border shadow-2xl ">
                            <AlertDialogHeader className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-2">
                                <AlertTriangle className="h-8 w-8 text-yellow-500 animate-pulse" />
                              </div>
                              <AlertDialogTitle className="text-xl font-bold italic text-white">
                                Tem Certeza?
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-muted-foreground font-medium pt-2">
                                Esta ação excluirá{" "}
                                <span className="text-primary font-bold">
                                  {lead.name}
                                </span>{" "}
                                para sempre.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="flex gap-2 mt-4">
                              <AlertDialogCancel className="rounded-full border-border bg-transparent text-foreground hover:text-yellow-500 font-bold italic cursor-pointer">
                                Cancelar
                              </AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(lead.id)}
                                className="rounded-full bg-destructive hover:bg-red-600 text-white font-bold italic cursor-pointer"
                              >
                                Confirmar
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-[400px] text-center">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <Inbox className="h-12 w-12 text-primary/40" />
                    <h3 className="text-xl font-bold text-white italic">
                      Aguardando Leads...
                    </h3>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 border-t border-border bg-muted/10 text-[9px] text-muted-foreground font-bold uppercase tracking-widest text-center italic opacity-60">
        Braincore Intelligence Data Stream • Sound & Visual Alerts Active
      </div>
    </TooltipProvider>
  );
}
