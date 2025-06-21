import { Card } from "@/components/card";
import Link from "next/link";

export default function Default() {
    return (
        <Card>
            <div>Default</div>
            <div>
                <Link href="/complex-dashboard/archived">default</Link>
            </div>
        </Card>
    )
}