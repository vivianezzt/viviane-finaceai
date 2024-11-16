"use client"
import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/app/_components/ui/dialog"

import { BotIcon, LoaderIcon } from "lucide-react";
import { generateAiReport } from "../_actions/generate-ai-report";
import { useState } from "react";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import Markdown from "react-markdown";

interface AiReportButtonProps {
    month: string
}

const AiReportButton = ({month}: AiReportButtonProps) => {
    const [report, setReport] = useState<string | null>()
    const [reportIsloading, setReportIsloading] = useState(false)
    const handleGenerateReportClik = async () => {
       try{
        setReportIsloading(true)
         const aiReport = await generateAiReport({month})
         setReport(aiReport)
       } catch(error){
        console.error(error)
       } finally{
        setReportIsloading(false)
       }
    };
    return ( 
        <Dialog 
        // onOpenChange={(open) => {
        //     if(!open){
        //         setReport(null)
        //     }
        // }}
        >
            <DialogTrigger asChild>
                <Button variant="ghost">
                    Relatótio de IA
                    <BotIcon/>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w[600px]">
           <DialogHeader>
                 <DialogTitle>Relatório de IA</DialogTitle>
                <DialogDescription>
                    Use inteligência artificial para gerar um relatório com insights sobre suas finanças.
                </DialogDescription>
           </DialogHeader>
           <ScrollArea className="prose prose-h3:text-white max-h-[450px] text-white prose-h4:text-white prose-strong:text-white">
            <Markdown>{report}</Markdown>
           </ScrollArea>
           <DialogFooter>
                <DialogClose asChild>
                    <Button variant="ghost">Cancelar</Button>
                </DialogClose>
                <Button onClick={handleGenerateReportClik} disabled={reportIsloading}>
                 {reportIsloading && <LoaderIcon className="animate-spin"/>}Gerar relatório
                 </Button>
           </DialogFooter>
            </DialogContent>
        </Dialog>
     );
}
 
export default AiReportButton;