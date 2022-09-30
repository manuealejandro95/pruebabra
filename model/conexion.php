<?php
class Conexion
{

    static private $instance = null;

    private function __contruct()
    {
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new Conexion();
        }
        return self::$instance;
    }

    public function Conectar()
    {
        define('DB_HOST', '192.168.1.40\DESARROLLO'); // Host de Bd

        define('DB_USER', 'sa'); //Usuario 

        define('DB_PASS', '51573m4.464'); //Password 
        
        define('DB_NAME', 'PRUEBAS'); //Database 



        $serverName = DB_HOST;

        $connectionInfo = array("Database" => DB_NAME, "UID" => DB_USER, "PWD" => DB_PASS, "CharacterSet" => "UTF-8");

        $conexion = sqlsrv_connect($serverName, $connectionInfo);



        if ($conexion) {
            
            return $conexion;
        } else {

            echo "Conexión no se pudo establecer.<br />";

            die(print_r(sqlsrv_errors(), true));
        }
    }
}
