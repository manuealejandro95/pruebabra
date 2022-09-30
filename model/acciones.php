<?php
require_once "conexion.php";
class datos extends Conexion
{

    public static function registroProductmodel($datos, $tabla)
    {
        $con = Conexion::getInstance()->Conectar();
        $query = "INSERT INTO $tabla(Descripcion, Estado, FechaFabricacion, FechaVencimiento, CodigoProveedor, DescripcionProv, TelefonoProv) VALUES ('" . $datos["desc"] . "','" . $datos["estado"] . "','" . $datos["fecfabri"] . "','" . $datos["fecvence"] . "','" . $datos["codprov"] . "','" . $datos["descprov"] . "','" . $datos["telprov"] . "')";
        $stmt = sqlsrv_query($con, $query);


        if ($stmt) {
            return 1;
        } else {
            die(print_r(sqlsrv_errors(), true));
        }
    }

    public static function UpdateProductmodel($datos, $tabla)
    {
        $con = Conexion::getInstance()->Conectar();
        $query = "UPDATE productos SET Descripcion='" . $datos["desc"]. "', Estado='" . $datos["estado"] . "', FechaFabricacion='" . $datos["fecfabri"] . "', FechaVencimiento='" . $datos["fecvence"] . "', CodigoProveedor='" . $datos["codprov"] . "', DescripcionProv='" . $datos["descprov"] . "', TelefonoProv='" . $datos["telprov"] . "'
        WHERE id='" . $datos["id"]. "'";
        $stmt = sqlsrv_query($con, $query);

        if ($stmt) {
            return 1;
        } else {
            die(print_r(sqlsrv_errors(), true));
        }
    }

    public static function DeleteProductModel($idproductmodel, $tabla)
    {
        $con = Conexion::getInstance()->Conectar();
        $query = "DELETE
        FROM $tabla
        WHERE id='" . $idproductmodel . "'";
        $stmt = sqlsrv_query($con, $query);

        if ($stmt) {
            return 1;
        } else {
            die(print_r(sqlsrv_errors(), true));
        }
    }

    public static function validaProductmodel($idproductmodel, $tabla)
    {
        $conn = Conexion::getInstance()->Conectar();
        $query = "SELECT id, Descripcion, Estado, FORMAT(FechaFabricacion, 'yyyy-MM-dd') AS FechaFabricado,FORMAT(FechaVencimiento, 'yyyy-MM-dd') AS FechaVence, CodigoProveedor, DescripcionProv, TelefonoProv FROM $tabla WHERE id = '" . $idproductmodel . "'";
        $result3 = sqlsrv_query($conn, $query);

        if ($result3) {
            while ($row = sqlsrv_fetch_array($result3,  SQLSRV_FETCH_ASSOC)) {
                $json[] = array(
                    'Id' => $row['id'],
                    'Nombre' => $row['Descripcion'],
                    'Estado' => $row['Estado'],
                    'FechaFabrica' => $row['FechaFabricado'],
                    'FechaVence' => $row['FechaVence'],
                    'CodigoPro' => $row['CodigoProveedor'],
                    'DescripcionPro' => $row['DescripcionProv'],
                    'TelefonoProv' => $row['TelefonoProv']
                );
            }
            $jsonstring = json_encode($json);
            return $jsonstring;

            sqlsrv_close($conn);
        }
    }

    public static function DatosProductsModel()
    {
        $conn = Conexion::getInstance()->Conectar();
        $query = "SELECT id, Descripcion, Estado, FORMAT(FechaFabricacion, 'dd/MM/yyyy') AS FechaFabricado,FORMAT(FechaVencimiento, 'dd/MM/yyyy') AS FechaVence, CodigoProveedor, DescripcionProv, TelefonoProv FROM productos ORDER BY id";
        $result = sqlsrv_query($conn, $query);

        if ($result) {
            while ($row = sqlsrv_fetch_array($result,  SQLSRV_FETCH_ASSOC)) {
                $json[] = array(
                    'Id' => $row['id'],
                    'Nombre' => $row['Descripcion'],
                    'Estado' => $row['Estado'],
                    'FechaFabrica' => $row['FechaFabricado'],
                    'FechaVence' => $row['FechaVence'],
                    'CodigoPro' => $row['CodigoProveedor'],
                    'DescripcionPro' => $row['DescripcionProv'],
                    'TelefonoProv' => $row['TelefonoProv']
                );
            }
            $jsonstring = json_encode($json);
            return $jsonstring;

            sqlsrv_close($conn);
        }
    }
}
