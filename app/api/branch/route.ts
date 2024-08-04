import { getBranchRoleById } from "@/actions/auth";

export async function POST(request: Request) {
  const { id } = (await request.json()) as { id: string };
  try {
    if (!id) {
      Response.json({ error: "id not found" });
    }
    let { role } = (await getBranchRoleById(id)) as { role: "USER" | "ADMIN" };

    return Response.json({ role });
  } catch (error) {
    return Response.json({ error: "internal server error" });
  }
}
