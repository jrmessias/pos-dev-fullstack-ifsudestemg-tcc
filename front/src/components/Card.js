export default function Card({ title, value, desc }) {
    return (
        <div className="bg-card border rounded-xl p-6">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
    );
}
