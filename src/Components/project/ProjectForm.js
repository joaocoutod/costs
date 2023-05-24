import { useEffect, useState } from "react";

import sty from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/category",{
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))   
    }, [])

    const submit = (e)=>{
        e.preventDefault();
        //console.log(project);
        handleSubmit(project)

    }

    function handleChenge(e){
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setProject({ 
            ...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }

    return (
        <form onSubmit={submit} className={sty.form}>
            <Input 
                type="text" 
                name="name"
                text="Nome do projeto" 
                placeholder="Insira o nome do projeto" 
                hendleOnChenge={handleChenge} />

            <Input 
                type="number" 
                name="budget"
                text="Orçamento do projeto" 
                placeholder="Insira o orçamento do projeto" 
                hendleOnChenge={handleChenge} />

            <Select 
                name="category_id" 
                text="selecione a categoria" 
                options={categories} 
                hendleOnChenge={handleCategory}
                value={project.category ? project.category.id : ''}/>

            <SubmitButton type="submit" text={btnText}/>
        </form>
    )
}

export default ProjectForm