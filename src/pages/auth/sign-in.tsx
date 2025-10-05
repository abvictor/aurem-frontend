import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { z } from "zod";

const signInForm = z.object({
  company: z.string(),
  username: z.string(),
  password: z.string()
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn(){

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting },} = useForm<SignInForm>();

    async function handleSignIn(data: SignInForm) {
        if(!data.company || !data.password || !data.username){
          toast.error("Credenciais inválidas.");
          return
        }
        toast.success("Autenticado com sucesso.");
        navigate("/dashboard");
    }

    return (
      <>
        <title>Aurem | Login</title>
        <div className="p-8">
          <div className="w-[350px] flex flex-col justify-center gap-6 ">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Acessar gerenciador
              </h1>
              <p>Acompanhe suas vendas pelo gerenciador</p>
            </div>

            <form
              onSubmit={handleSubmit(handleSignIn)}
              className="flex flex-col gap-4"
            >
              <div className="space-y-2">
                <Label htmlFor="company">Sua empresa</Label>
                <Input id="company" type="text" {...register("company")} />
                <Label htmlFor="username">Seu usuário</Label>
                <Input id="email" type="email" {...register("username")} />
                <Label htmlFor="password">Sua senha</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                Acessar painel
              </Button>
            </form>
          </div>
        </div>
      </>
    );
}