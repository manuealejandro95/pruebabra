<?php
    require_once "../../controller/controller.php";
    require_once "../../model/acciones.php";

    class MvcRegistroProduct{
        public $enviardata;
        public function RegistrarProductView(){
            $datosenvia = $this->enviardata;
                if (isset($datosenvia["desc"]) && isset($datosenvia["fecvence"])){
                    $respuesta = Mvccontroller::RegistrarProductController($datosenvia);
                    echo $respuesta;
                }else{
                    echo "3";
                }
        }
    }

    $data = new MvcRegistroProduct();
    $data -> enviardata = array("desc"=>ucwords(strtolower($_POST["descripcion"])),
                                "estado"=>$_POST["estado"],
                                "fecfabri"=>$_POST["fecfabri"],
                                "fecvence"=>$_POST["fecvence"],
                                "codprov"=>$_POST["codprov"],
                                "descprov"=>ucwords(strtolower($_POST["descprov"])),
                                "telprov"=>$_POST["telprov"]);
    $data -> RegistrarProductView();