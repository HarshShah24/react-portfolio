import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function Section({ title, children }) {
  return (
    <Card className="border-slate-200 bg-slate-50/80 shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default Section;
