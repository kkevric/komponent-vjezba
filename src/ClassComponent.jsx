import { Component } from "react";
import FuncComponent from "./FuncComponent";

export default class ClassComponent extends  Component {
    render(){
        return (
            <div>
               <h1>Ovo je komponenta definirana klasom.</h1> 
               <FuncComponent/>
            </div>


        )
    }
}