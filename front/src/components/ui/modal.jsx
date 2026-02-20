"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon.js";

/**
 * Modal Genérico
 */
export function Modal({
                          open,
                          onOpenChange,
                          title,
                          description,
                          children,
                          footer,
                      }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                <div className="py-4">{children}</div>
                {footer && <DialogFooter>{footer}</DialogFooter>}
            </DialogContent>
        </Dialog>
    );
}

/**
 * Modal de Confirmação
 */
export function ConfirmModal({
                                 open,
                                 onOpenChange,
                                 title,
                                 description,
                                 onConfirm,
                                 isLoading = false,
                                 confirmText = "Confirmar",
                                 cancelText = "Cancelar",
                                 variant = "default",
                             }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange} className="backdrop-blur-sm blur-md">
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription dangerouslySetInnerHTML={{ __html: description }}></DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2 sm:gap-0">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        disabled={isLoading}
                        className="cursor-pointer dark:hover:text-white mr-1"
                    >
                        {cancelText}
                    </Button>
                    <Button
                        variant={variant === "destructive" ? "destructive" : "default"}
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                                Aguarde...
                            </>
                        ) : (
                            confirmText
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
