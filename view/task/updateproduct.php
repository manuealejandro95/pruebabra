<?php
    require_once "../../controller/controller.php";
    require_once "../../model/acciones.php";

    class MvcUpdateProduct{
        public $enviardata;
        public function UpdateProductView(){
            $datosenvia = $this->enviardata;
            if (isset($datosenvia["desc"]) && isset($datosenvia["fecvence"])){
                    $respuesta = Mvccontroller::UpdateProductController($datosenvia);
                    echo $respuesta;
                }else{
                    echo "3";
                }
        }
    }

    $data = new MvcUpdateProduct();
    $data -> enviardata = array("id"=>$_POST["id"],
                                "desc"=>ucwords(strtolower($_POST["descripcion"])),
                                "estado"=>$_POST["estado"],
                                "fecfabri"=>$_POST["fecfabri"],
                                "fecvence"=>$_POST["fecvence"],
                                "codprov"=>$_POST["codprov"],
                                "descprov"=>ucwords(strtolower($_POST["descprov"])),
                                "telprov"=>$_POST["telprov"]);
    $data -> UpdateProductView();