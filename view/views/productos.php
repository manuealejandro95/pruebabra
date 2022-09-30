<div class="container">
  <div class="row">
    <div class="col text-center">
      <h2>Productos</h2>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button type="button" id="modal" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
        Nuevo Producto
      </button>

      <!-- Modal -->
      <div class="modal fade bd-example-modal-lg" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalScrollableTitle"></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form method="POST" id="formuproducto">
                <input type="text" id="accion" style="display: none;">
                <div class="form-row justify-content-center">
                  <div class="form-group col-md-4" id="codproduc">
                    <label for="id">Codigo</label>
                    <input type="text" class="form-control" name="id" id="id">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="desc">Descripcion</label>
                    <input type="text" class="form-control" name="desc" id="desc">
                  </div>
                  <div class="form-group col-md-4" id="nombres">
                    <label for="estado">Estado</label>
                    <select class="form-control" name="estado" id="estado">
                      <option value=""></option>
                      <option value="1">Activo</option>
                      <option value="0">Inactivo</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6" id="apellido">
                    <label for="fechfabri">Fecha de fabrica</label>
                    <input type="date" class="form-control" name="fechfabri" id="fechfabri">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="fechvence">Fecha de Vencimiento</label>
                    <input name="fechvence" type="date" class="form-control" id="fechvence">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="codprove">Codigo Proveedor</label>
                    <input type="number" name="codprove" class="form-control" id="codprove" placeholder="Solo entero">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="descprove">Descripcion Proveedor</label>
                    <input type="text" name="descprove" class="form-control" id="descprove">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="telprove">Telefono Proveedor</label>
                    <input name="telprove" type="number" class="form-control" id="telprove">
                  </div>
                </div>
                <div class="row justify-content-center mb-3">
                  <div class="col-6 col-sm-6 col-xl-6">
                    <button id="enviar" class="btn btn-lg btn-block btn-primary">Guardar</button>
                  </div>
                  <div class="col-6 col-sm-6 col-xl-6" id = "delete">
                    <button id="eliminar" class="btn btn-lg btn-block btn-danger">Eliminar</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-12 col-md-12 col-xl-12">
      <div class="table-responsive" id="registros">
      </div>
    </div>
  </div>
</div>
<script src="js/productos.js?v=<?php echo (rand()); ?>"></script>