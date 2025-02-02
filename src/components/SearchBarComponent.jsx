import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = ["Electronics", "Clothing", "Furniture"];

export default function ReturnPortal() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {categories.map((category) => (
        <Card key={category} onClick={() => navigate(`/return-form/${category}`)} className="cursor-pointer hover:shadow-lg p-6 text-center">
          <CardContent>
            <h2 className="text-lg font-semibold">{category}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
