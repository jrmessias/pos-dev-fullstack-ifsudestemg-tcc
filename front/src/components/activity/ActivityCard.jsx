import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ActivityCard({ item, onOpen }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <div className="text-sm text-muted-foreground">{item.discipline?.name}</div>
            </CardHeader>
            <CardContent />
            <CardFooter className="justify-between">
                <div className="text-sm text-muted-foreground">{item.status}</div>
                <Button size="sm" onClick={() => onOpen?.(item)}>Abrir</Button>
            </CardFooter>
        </Card>
    );
}
