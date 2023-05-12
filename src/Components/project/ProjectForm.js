import sty from "./ProjectForm.module.css";
import Input from "../form/Input";

function ProjectForm(){
    return (
        <form  className={sty.form}>

            <Input type="text" text="Nome do projeto" placeholder="Insira o nome do projeto" />

            <Input type="number" text="Orçamento do projeto" placeholder="Insira o orçamento do projeto" />

            <div>
                <select name="category_id">
                    <option disabled selected>selecione a categoria</option>
                </select>
            </div>

            <div>
                <button type="submit">Criar Projeto</button>
            </div>
        </form>
    )
}

export default ProjectForm