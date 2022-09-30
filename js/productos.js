$("#modal").click(function (e) {
  e.preventDefault();
  document.getElementById("formuproducto").reset();
  $("#delete").hide();
  $("#codproduc").hide();
  $("#exampleModalScrollableTitle").text("Nuevo Producto");
});

$("#eliminar").click(function (e) {
    e.preventDefault();
    Delete($("#id").val(), $("#estado").val());
});

$(document).ready(function () {
  obtenerproductos();
});

function obtenerproductos() {
  $.ajax({
    url: "view/task/datosproducts.php",
    method: "GET",
    cache: false,
    contentType: "application/json; charset=utf-8",
    dataType: false,
    success: function (response) {
      let template = "";
      if (response === "null") {
        template += `
                    <div class="col-12 col-md-12 col-xl-12">
                        <p class="text-uppercase">No hay Productos registrados.</p>
                    </div>
                `;
      } else {
        let datos = JSON.parse(response);
        template += `
                                      
                    <table class="table table-sm table-striped-custom text-center">
                        <thead class="bg-custom text-primary">
                            <tr class="h4 font-weight-bold">
                                <th scope="col">Id Producto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Fecha Fa.</th>
                                <th scope="col">Fecha vence</th>
                                <th scope="col">Cod Prov</th>
                                <th scope="col">Nombre prov.</th>
                                <th scope="col">Cel. Prov.</th>
                                <th ></th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>`;
        datos.forEach((dato) => {
            let estado ="";
            if(dato.Estado === 1){
                estado = "Activo";
            }else{
                estado = "Inactivo";
            }
          template += `                                
                                    <tr class="h0">
                                        <td class="align-middle center">${dato.Id}</td>
                                        <td class="align-middle center">${dato.Nombre}</td>
                                        <td class="align-middle center">${estado}</td>
                                        <td class="align-middle center">${dato.FechaFabrica}</td>
                                        <td class="align-middle center">${dato.FechaVence}</td>
                                        <td class="align-middle center">${dato.CodigoPro}</td>
                                        <td class="align-middle center">${dato.DescripcionPro}</td>
                                        <td class="align-middle center">${dato.TelefonoProv}</td>
                                        <td class="align-middle center"><a class="btn btn-danger text-white" onclick="findeditar(${dato.Id});" role="button">Eliminar</a></td>
                                        <td class="align-middle center"><a class="btn btn-info text-white" onclick="findeditar(${dato.Id});" role="button">Editar</a></td>  
                                    </tr>                        
                            `;
        });
        template += ` 
                        </tbody>                                                
                    </table>
                `;
      }
      $("#registros").html(template);
    },
  });
}

$("#enviar").click(function (e) {
  e.preventDefault();
  validaciones();
});
function validaciones() {
  switch (true) {
    case $("#desc").val().length === 0:
      Swal.fire({
        title: "<strong>Error</strong>",
        icon: "error",
        html: '<p class="text-danger font-weight-bold">No hay una descripcion del producto.</p>',
        showConfirmButton: false,
        timer: 5500,
        returnFocus: false,
      });
      $("#desc").focus();
      break;
    case $("#estado").val().length === 0:
      Swal.fire({
        title: "<strong>Error</strong>",
        icon: "error",
        html: '<p class="text-danger font-weight-bold">Debe colocar el estado del producto.</p>',
        showConfirmButton: false,
        timer: 5500,
        returnFocus: false,
      });
      $("#estado").focus();
      break;
    case $("#fechfabri").val().length === 0:
      Swal.fire({
        title: "<strong>Error</strong>",
        icon: "error",
        html: '<p class="text-danger font-weight-bold">Fecha de fabricado vacío.</p>',
        showConfirmButton: false,
        timer: 5500,
        returnFocus: false,
      });
      $("#fechfabri").focus();
      break;
    case $("#fechvence").val().length === 0:
      Swal.fire({
        title: "<strong>Error</strong>",
        icon: "error",
        html: '<p class="text-danger font-weight-bold">Fecha de vencimiento vacío.</p>',
        showConfirmButton: false,
        timer: 5500,
        returnFocus: false,
      });
      $("#fechvence").focus();
      break;
    case $("#fechfabri").val() >= $("#fechvence").val():
      Swal.fire({
        title: "<strong>Error</strong>",
        icon: "error",
        html: '<p class="text-danger font-weight-bold">La fecha de fabrica no puede ser mayor o igual a la de vencimiento.</p>',
        showConfirmButton: false,
        timer: 5500,
        returnFocus: false,
      });
      $("#fechvence").focus();
      break;
    case $("#codprove").val().length === 0:
      Swal.fire({
        title: "<strong>Error</strong>",
        icon: "error",
        html: '<p class="text-danger font-weight-bold">Debe escribir un codigo de proveedor.</p>',
        showConfirmButton: false,
        timer: 5500,
        returnFocus: false,
      });
      $("#codprove").focus();
      break;
    case $("#descprove").val().length === 0:
      Swal.fire({
        title: "<strong>Error</strong>",
        icon: "error",
        html: '<p class="text-danger font-weight-bold">Descripcion de proveedor vacío.</p>',
        showConfirmButton: false,
        timer: 5500,
        returnFocus: false,
      });
      $("#descprove").focus();
      break;
    case $("#telprove").val().length === 0 || $("#telprove").val().length <= 6:
      Swal.fire({
        title: "<strong>Error</strong>",
        icon: "error",
        html: '<p class="text-danger font-weight-bold">Numero de telefono de proveedor invalido.</p>',
        showConfirmButton: false,
        timer: 5500,
        returnFocus: false,
      });
      $("#telprove").focus();
      break;
    default:
      let datos = new FormData();
      
      if ($("#accion").val() == "Editar") {
        datos.append("id", $("#id").val());
        datos.append("descripcion", $("#desc").val());
        datos.append("estado", $("#estado").val());
        datos.append("fecfabri", $("#fechfabri").val());
        datos.append("fecvence", $("#fechvence").val());
        datos.append("codprov", $("#codprove").val());
        datos.append("descprov", $("#descprove").val());
        datos.append("telprov", $("#telprove").val());
        update(datos);
      } else {
        datos.append("descripcion", $("#desc").val());
        datos.append("estado", $("#estado").val());
        datos.append("fecfabri", $("#fechfabri").val());
        datos.append("fecvence", $("#fechvence").val());
        datos.append("codprov", $("#codprove").val());
        datos.append("descprov", $("#descprove").val());
        datos.append("telprov", $("#telprove").val());
        enviarformulario(datos);
      }
  }
}

function enviarformulario(datos) {
  $.ajax({
    url: "view/task/registrerproducto.php",
    method: "POST",
    data: datos,
    cache: false,
    contentType: false,
    processData: false,
    success: function (respuesta) {
      switch (respuesta) {
        case "1":
          Swal.fire({
            title: "<strong>Registro Exitoso</strong>",
            icon: "success",
            html: '<p class="text-success font-weight-bold">Registro Exitoso.</p>',
            showConfirmButton: false,
            timer: 5000,
            returnFocus: false,
          });
          document.getElementById("formuproducto").reset();
          obtenerproductos();
          window.setTimeout(function () {
            window.location.href = "/pruebabra/";
          }, 6000);
          break;
        default:
          Swal.fire({
            title: "<strong>Error</strong>",
            icon: "error",
            html: '<p class="text-danger font-weight-bold">No se pudo realizar el registro.</p>',
            showConfirmButton: false,
            timer: 7000,
            returnFocus: false,
          });
          document.getElementById("formuproducto").reset();
      }
    },
  });
}

function findeditar(dato) {
  $("#accion").val("Editar");
  $("#exampleModalScrollableTitle").text("Formulario de editar");
  $("#codproduc").show();
  $("#delete").show();
  $("#id").prop('readonly',true);
  $("#exampleModalScrollable").modal("show");
  $("#codigo").val(dato);
  let datos = new FormData();
  datos.append("codproduct", dato);
  $.ajax({
    url: "view/task/validaproduct.php",
    method: "POST",
    data: datos,
    cache: false,
    contentType: false,
    processData: false,
    success: function (respuesta) {
      let datos = JSON.parse(respuesta);
      if (respuesta === "[]") {
      } else {
        datos.forEach((dato) => {
            $("#id").val(dato.Id);
            $("#desc").val(dato.Nombre);
            $("#estado").val(dato.Estado);
            $("#fechfabri").val(dato.FechaFabrica);
            $("#fechvence").val(dato.FechaVence);
            $("#codprove").val(dato.CodigoPro);
            $("#descprove").val(dato.DescripcionPro);
            $("#telprove").val(dato.TelefonoProv);
        });
      }
    },
  });
}

function update(datos) {
  $.ajax({
    url: "view/task/updateproduct.php",
    method: "POST",
    data: datos,
    cache: false,
    contentType: false,
    processData: false,
    success: function (respuesta) {
      
      switch (respuesta) {
        case "1":
          Swal.fire({
            title: "<strong>Registro Exitoso</strong>",
            icon: "success",
            html: '<p class="text-success font-weight-bold">Actualizacion Exitosa.</p>',
            showConfirmButton: false,
            timer: 5000,
            returnFocus: false,
          });
          document.getElementById("formuproducto").reset();
          window.setTimeout(function () {
            window.location.href = "/pruebabra/";
          }, 6000);
          break;
        default:
          Swal.fire({
            title: "<strong>Error</strong>",
            icon: "error",
            html: '<p class="text-danger font-weight-bold">No se pudo actualizar el registro.</p>',
            showConfirmButton: false,
            timer: 7000,
            returnFocus: false,
          });
          document.getElementById("formuproducto").reset();
      }
    },
  });
}

function Delete(dato, estado) {  
  if(estado === "0"){
    Swal.fire({
        title: "Esta seguro?",
        text: "Desea eliminar este producto! ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          let datos = new FormData();
          datos.append("codproduct", dato);
          $.ajax({
            url: "view/task/deleteproduct.php",
            method: "POST",
            data: datos,
            cache: false,
            contentType: false,
            processData: false,
            success: function (respuesta) {
              console.log(respuesta);
              switch (respuesta) {
                case "1":
                  Swal.fire({
                    title: "<strong>Registro Exitoso</strong>",
                    icon: "success",
                    html: '<p class="text-success font-weight-bold">El registro ha sido eliminado.</p>',
                    showConfirmButton: false,
                    timer: 5000,
                    returnFocus: false,
                  });
                  document.getElementById("formuproducto").reset();
                  window.setTimeout(function () {
                    window.location.href = "/pruebabra";
                  }, 6000);
                  break;
                default:
                  Swal.fire({
                    title: "<strong>Error</strong>",
                    icon: "error",
                    html: '<p class="text-danger font-weight-bold">No se pudo eliminar el registro.</p>',
                    showConfirmButton: false,
                    timer: 7000,
                    returnFocus: false,
                  });
                  document.getElementById("formuproducto").reset();
              }
            },
          });
        }
      });
  }else{
    Swal.fire({
        title: "<strong>Error al eliminar</strong>",
        icon: "error",
        html: '<p class="text-success font-weight-bold">Para eliminar el producto este debe estar inactivo</p>',
        showConfirmButton: false,
        timer: 5000,
        returnFocus: false,
      });
      document.getElementById("formuproducto").reset();
      window.setTimeout(function () {
        window.location.href = "/pruebabra/";
      }, 6000);
  }
}