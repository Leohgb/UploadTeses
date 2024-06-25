(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <!--Limitando a quantidade de postagens-->\r\n"
    + ((stack1 = helpers.each.call(alias1,(helpers.limit||(depth0 && depth0.limit)||container.hooks.helperMissing).call(alias1,(depth0 != null ? depth0.postagens : depth0),4,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":27}}}),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":27,"column":9}}})) != null ? stack1 : "")
    + "    <div class=\"col text-center mb-3 \">\r\n       <a href=\"/Postagens\"><button class=\"btn btn-outline-success btn-lg\">Ver mais</button></a>\r\n      </div>    \r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card mt-4 mb-4\">\r\n  <div class=\"card-body shadow-sm\">\r\n    <h3>"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":18}}}) : helper)))
    + "</h3>\r\n     <p>"
    + alias4(((helper = (helper = helpers.descricao || (depth0 != null ? depth0.descricao : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descricao","hash":{},"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":18,"column":21}}}) : helper)))
    + "</p>\r\n       <a href=\"/Postagem/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data,"loc":{"start":{"line":19,"column":26},"end":{"line":19,"column":34}}}) : helper)))
    + "\"><button class=\"btn btn-success\">Leia Mais</button></a>\r\n      <hr>\r\n     <small>Categoria: "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.nome : stack1), depth0))
    + "</small><br>\r\n    <small>Data de publicação: "
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":22,"column":31},"end":{"line":22,"column":39}}}) : helper)))
    + "</small>\r\n  </div>\r\n  \r\n</div>\r\n\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <h5 class=\"mt-4 mb-2\">Nenhuma Postagem</h5>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"bg-dark bg-gradient text-white p-5 rounded m-3\">\r\n  <h1 class=\"display-4\">Bem-vindo a Postagem de Teses</h1>\r\n  <p class=\"lead\">Faça sua publicação</p>\r\n  <hr class=\"my-4\">\r\n  <p>Utilize o site para publicar e visualizar Teses</p>\r\n  <a class=\"btn btn-primary btn-lg\" href=\"/usuarios/registro\" role=\"button\">Crie uma conta</a>\r\n</div>\r\n\r\n<h2>Postagens recentes</h2>\r\n  <hr>\r\n  \r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.postagens : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":33,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['admin/addcategorias'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.texto || (depth0 != null ? depth0.texto : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"texto","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":45}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.erros : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "<h3>Nova categoria:</h3>\r\n<div class=\"card\"><form action=\"/admin/categorias/nova\" method=\"POST\">\r\n    <div class=\"card-body shadow-sm\">\r\n<label for=\"nome\">Nome: </label>\r\n    <input class=\"form-control\" type=\"text\" id=\"nome\" name=\"nome\" placeholder=\"Nome da categoria\">\r\n     <label for=\"slug\">Slug: </label>\r\n    <input class=\"form-control\"  type=\"text\" id=\"slug\" name=\"slug\" placeholder=\"Slug da categoria\">\r\n    <br>\r\n    <button type=\"submit\" class=\"btn btn-success\">Criar categoria</button>\r\n</form>        \r\n    </div>\r\n</div>";
},"useData":true});
templates['admin/addPostagem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.texto || (depth0 != null ? depth0.texto : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"texto","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":45}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <option value=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":38}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.nome || (depth0 != null ? depth0.nome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nome","hash":{},"data":data,"loc":{"start":{"line":19,"column":40},"end":{"line":19,"column":48}}}) : helper)))
    + "</option>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                <option value=\"0\">Nenhuma categoria registrada</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.erros : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "<div class=\"card\">\r\n    <div class=\"card-body shadow-sm\">\r\n        <h4>Nova Postagem: </h4>\r\n        <form action=\"/admin/postagens/nova\" method=\"POST\" enctype=\"multipart/form-data\">\r\n             <label for=\"titulo\" class=\"mb-1 mt-1\">Título: </label>\r\n            <input type=\"text\" name=\"titulo\" class=\"form-control\" required>\r\n            <label for=\"slug\" class=\"mb-1 mt-1\">Slug: </label>\r\n            <input type=\"text\" name=\"slug\" class=\"form-control\" required>\r\n            <label for=\"descricao\" class=\"mb-1 mt-1\">Descrição: </label>\r\n            <input type=\"text\" name=\"descricao\" class=\"form-control\" required>\r\n            <label for=\"categoria\" class=\"mb-1 mt-1\">Categoria: </label>\r\n            <select name=\"categoria\" class=\"form-select\">             \r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categorias : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":18,"column":14},"end":{"line":22,"column":25}}})) != null ? stack1 : "")
    + "            </select>\r\n\r\n            <label class=\"btn btn-outline-danger mt-4\">\r\n                <input type=\"file\" name=\"documentacao\" id=\"pdf\" onchange=\"fileChanged(this)\" hidden>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-pdf\" viewBox=\"0 0 16 16\">\r\n                    <path d=\"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z\"></path>\r\n                    <path d=\"M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z\"></path>\r\n                </svg>\r\n                    Adicionar\r\n              </label>\r\n              <span class=\"fileName\">Adicione a tese</span>\r\n            <br>\r\n            \r\n            <button class=\"btn btn-success mt-4\" type=\"submit\">Criar postagem</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
},"useData":true});
templates['admin/categorias'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"card mt-4\">\r\n    <div class=\"card-body shadow-sm\">\r\n        <h4>"
    + alias4(((helper = (helper = helpers.nome || (depth0 != null ? depth0.nome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nome","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":20}}}) : helper)))
    + "</h4>\r\n        <small>Slug: "
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data,"loc":{"start":{"line":9,"column":21},"end":{"line":9,"column":29}}}) : helper)))
    + "</small><br>\r\n        <small>Data de criação: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":10,"column":32},"end":{"line":10,"column":40}}}) : helper)))
    + "</small><br>\r\n        <a href=\"/admin/categorias/edit/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":11,"column":40},"end":{"line":11,"column":47}}}) : helper)))
    + "\"><button class=\"btn btn-success mt-4\">Editar categoria</button></a>\r\n        <form action=\"/admin/categorias/deletar\" method=\"POST\">\r\n            <input type=\"hidden\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":57}}}) : helper)))
    + "\">\r\n            <button type=\"submit\" class=\"btn btn-danger mt-2\"> Deletar categoria</button>\r\n        </form>\r\n    </div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <h4 class=\"mt-3\">Nenhuma categoria Registrada</h4>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Lista de categorias:</h2>\r\n<hr>\r\n<a href=\"/admin/categorias/add\"><button class=\"btn btn-success\">Nova categoria</button></a>\r\n<a href=\"/addpostagem\" class=\"mb-3\"><button class=\"btn btn-success\">Nova Postagem</button></a>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categorias : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":20,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['admin/editcategorias'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.texto || (depth0 != null ? depth0.texto : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"texto","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":45}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.erros : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "    <h3>Editar categoria: </h3>\r\n    <div class=\"card\">\r\n    <div class=\"card-body shadow-sm\">\r\n        <form action=\"/admin/categorias/edit\" method=\"POST\">\r\n        <input type=\"hidden\" name=\"id\" class=\"mb-1 mt-1\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1._id : stack1), depth0))
    + "\">\r\n        <label for=\"nome\">Nome: </label>    \r\n            <input type=\"text\" id=\"nome\" name=\"nome\" placeholder=\"Nome das categorias\" class=\"form-control mb-1 mt-1\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.nome : stack1), depth0))
    + "\">\r\n        <label for=\"slug\">Slug: </label>    \r\n            <input type=\"text\" id=\"slug\" name=\"slug\" placeholder=\"Slug das categorias\" class=\"form-control mb-1 mt-1\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.slug : stack1), depth0))
    + "\">\r\n            <br>\r\n        <button type=\"submit\" class=\"btn btn-success\">Editar categoria</button>\r\n        </div>\r\n    </form>\r\n    </div>";
},"useData":true});
templates['admin/editpostagens'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.texto || (depth0 != null ? depth0.texto : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"texto","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":45}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <option value=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":20,"column":31},"end":{"line":20,"column":38}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.nome || (depth0 != null ? depth0.nome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nome","hash":{},"data":data,"loc":{"start":{"line":20,"column":40},"end":{"line":20,"column":48}}}) : helper)))
    + "</option>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                <option value=\"0\">Nenhuma categoria registrada</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.erros : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "<div class=\"card\">\r\n    <div class=\"card-body shadow-sm\">\r\n        <h4>Editar Postagem: </h4>\r\n        <form action=\"/admin/postagem/edit\" method=\"post\" >\r\n            <input type=\"hidden\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" name=\"id\">\r\n            <label for=\"titulo\" class=\"mb-1 mt-1\">Título: </label>\r\n            <input type=\"text\" name=\"titulo\" class=\"form-control\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.titulo : stack1), depth0))
    + "\" required>\r\n            <label for=\"slug\" class=\"mb-1 mt-1\">Slug: </label>\r\n            <input type=\"text\" name=\"slug\" class=\"form-control\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.slug : stack1), depth0))
    + "\" required>\r\n            <label for=\"descricao\" class=\"mb-1 mt-1\">Descrição: </label>\r\n            <input type=\"text\" name=\"descricao\" class=\"form-control\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.descricao : stack1), depth0))
    + "\" required>\r\n            <label for=\"categoria\" class=\"mb-1 mt-1\">Categoria: </label>\r\n            <select name=\"categoria\" class=\"form-select\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categorias : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":19,"column":15},"end":{"line":23,"column":25}}})) != null ? stack1 : "")
    + "            </select>\r\n            <br>\r\n            <button class=\"btn btn-success mt-4\" type=\"submit\">Editar postagem</button>\r\n            \r\n        </form>\r\n\r\n    </div>\r\n</div>";
},"useData":true});
templates['admin/postagens'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"card mt-4\">\r\n        <div class=\"card-body shadow-sm\">\r\n            <h4>"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":26}}}) : helper)))
    + "</h4>\r\n            <p>Descrição:"
    + alias4(((helper = (helper = helpers.descricao || (depth0 != null ? depth0.descricao : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descricao","hash":{},"data":data,"loc":{"start":{"line":9,"column":25},"end":{"line":9,"column":38}}}) : helper)))
    + "</p>\r\n            <small>Data: "
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":10,"column":25},"end":{"line":10,"column":33}}}) : helper)))
    + "</small><br>\r\n            <small>Categoria: "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.nome : stack1), depth0))
    + "</small><br>\r\n            <a href=\"/admin/postagens/edit/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":12,"column":43},"end":{"line":12,"column":50}}}) : helper)))
    + "\"><button class=\"btn btn-success mt-3\">Editar Postagem</button></a>\r\n            <a href=\"/admin/postagens/deletar/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":13,"column":46},"end":{"line":13,"column":53}}}) : helper)))
    + "\"><button class=\"btn btn-danger mt-3\">Deletar Postagem</button></a>\r\n\r\n        </div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Lista de postagens:</h2>\r\n<hr>\r\n<a href=\"/admin/postagens/add\"><button class=\"btn btn-success\">Nova categoria</button></a>\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.postagens : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":19,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['categorias/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <a href=\"/categorias/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data,"loc":{"start":{"line":6,"column":25},"end":{"line":6,"column":33}}}) : helper)))
    + "\" ><h5 class=\"mt-3\">"
    + alias4(((helper = (helper = helpers.nome || (depth0 != null ? depth0.nome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nome","hash":{},"data":data,"loc":{"start":{"line":6,"column":53},"end":{"line":6,"column":61}}}) : helper)))
    + "</h5></a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h4>Categorias: </h4>\r\n\r\n<hr>\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categorias : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['categorias/postagens'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card mt-4\">\r\n  <div class=\"card-body shadow-sm\">\r\n    <h3>"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":18}}}) : helper)))
    + "</h3>\r\n    <p>"
    + alias4(((helper = (helper = helpers.descricao || (depth0 != null ? depth0.descricao : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descricao","hash":{},"data":data,"loc":{"start":{"line":7,"column":7},"end":{"line":7,"column":20}}}) : helper)))
    + "</p>\r\n       <a href=\"/Postagem/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":26},"end":{"line":8,"column":34}}}) : helper)))
    + "\"><button class=\"btn btn-success\">Leia Mais</button></a>\r\n      <hr>\r\n    <small>Data de publicação: "
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":10,"column":31},"end":{"line":10,"column":39}}}) : helper)))
    + "</small>\r\n  </div>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <h5>Nenhum Postagem</h5>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.nome : stack1), depth0))
    + "</h1>\r\n<hr>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.postagens : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":15,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['layouts/main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"alert alert-danger \">"
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"error","hash":{},"data":data,"loc":{"start":{"line":17,"column":45},"end":{"line":17,"column":54}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!DOCTYPE html>\r\n<html lang=\"pt-br\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <link rel=\"stylesheet\" href=\"/css/bootstrap.css\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n     <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/bootstrap.css\">\r\n       <link rel=\"icon\" type=\"image/x-icon\" href=\"/img/thesis.png\">\r\n    <title>UpTeses</title>\r\n</head>\r\n<body>\r\n    <!-- Sinal de \">\" faz o handlebars reconhecer que é da pasta partials-->\r\n"
    + ((stack1 = container.invokePartial(partials._navbar,depth0,{"name":"_navbar","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"container mt-4\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials._msg,depth0,{"name":"_msg","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n</body>\r\n\r\n <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\" crossorigin=\"anonymous\">\r\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n<script src=\"/js/bootstrap.js\"></script>\r\n<script  src=\"/js/main.js\"></script>\r\n</html>\r\n";
},"usePartial":true,"useData":true});
templates['partials/_msg'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-success\">"
    + container.escapeExpression(((helper = (helper = helpers.success_msg || (depth0 != null ? depth0.success_msg : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"success_msg","hash":{},"data":data,"loc":{"start":{"line":3,"column":37},"end":{"line":3,"column":52}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.error_msg || (depth0 != null ? depth0.error_msg : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"error_msg","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":49}}}) : helper)))
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!--Vem das variaveis globais-->\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.success_msg : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":4,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error_msg : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['partials/_navbar'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"/usuarios/postagens\">Minhas postagens</a>\r\n          </li>\r\n      </ul>\r\n        <div class=\"navbar-nav float-right me-5\">\r\n          <li class=\"nav-item\">\r\n            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" style=\"--bs-btn-padding-y: 0.05rem;\">\r\n              <a class=\"nav-link Disabled\" href=\"/usuarios/logout\" >Sair</a></button>\r\n            </li>\r\n              </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n            </ul>\r\n\r\n          <div class=\"navbar-nav me-5 mt-2 mt-lg-0 float-sm-none float-md-none float-xl-right\" style=\"display:flex; gap:5%;\">\r\n            <li class=\"nav-item\">\r\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" style=\"--bs-btn-padding-y: 0.05rem;\">\r\n              <a class=\"nav-link Disabled\" href=\"/usuarios/login\" >Login</a></button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <button type=\"button\" class=\"btn mt-3 mt-lg-0 btn-outline-secondary btn-sm\" style=\"--bs-btn-padding-y: 0.05rem;\">\r\n              <a class=\"nav-link Disabled\" href=\"/usuarios/registro\" >Registro</a></button>\r\n            </li>\r\n          </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container-fluid d-flex flex-column align-items-center flex-sm-row justify-content-between \">\r\n  <div class=\"ms-sm-5 mb-3 mb-sm-0 mt-3 \">\r\n    <a href=\"/addpostagem\" class=\"\"><button class=\"btn btn-success\">Nova Postagem</button></a>\r\n  </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"container-fluid mb-2\">\r\n    <a class=\"navbar-brand\" href=\"/\">Postagem de Teses</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav me-auto mb-lg-0 \">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"/\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"/categorias\">Categorias</a>\r\n        </li>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":40,"column":15}}})) != null ? stack1 : "")
    + "        \r\n    </div>\r\n  </div>\r\n</nav>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":2},"end":{"line":50,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"d-flex flex-column mt-sm-3 \">\r\n<form class=\"me-3 mt-2 mt-sm-0 pb-4 pb-sm-0 d-flex align-self-end\" action=\"/Postagens/resultados\" method=\"GET\">\r\n  <div class=\"btn-group top-0 end-0\" role=\"group\">\r\n    <input type=\"text\" class=\"form-control rounded-0\" name=\"pesquisa\" />\r\n    <input type=\"submit\" value=\"Pesquisar\" class=\"btn btn-primary\"/>\r\n  </div>\r\n</form>\r\n</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":2},"end":{"line":61,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['Postagem/index'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"card \">\r\n    <div class=\"card-body shadow-sm\">\r\n        <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.titulo : stack1), depth0))
    + "</h1>\r\n            <hr>\r\n        <small>Data de publicação: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.data : stack1), depth0))
    + "</small>\r\n        <hr>\r\n        <small>Descrição: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.descricao : stack1), depth0))
    + "</small>\r\n        <hr>\r\n            <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.documentacao : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" download>\r\n                <label class=\"btn btn-outline-danger\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-pdf\" viewBox=\"0 0 16 16\">\r\n                    <path d=\"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z\"></path>\r\n                    <path d=\"M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z\"></path>\r\n                </svg>\r\n                    Download\r\n              </label>\r\n                </a>           \r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['postagens/postagens'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card mt-4 mb-4\">\r\n  <div class=\"card-body shadow-sm\">\r\n    <h3>"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":18}}}) : helper)))
    + "</h3>\r\n    <p>"
    + alias4(((helper = (helper = helpers.descricao || (depth0 != null ? depth0.descricao : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descricao","hash":{},"data":data,"loc":{"start":{"line":7,"column":7},"end":{"line":7,"column":20}}}) : helper)))
    + "</p>\r\n       <a href=\"/Postagem/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data,"loc":{"start":{"line":8,"column":26},"end":{"line":8,"column":34}}}) : helper)))
    + "\"><button class=\"btn btn-success\">Leia Mais</button></a>\r\n      <hr>\r\n     <small>Categoria: "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.nome : stack1), depth0))
    + "</small><br>\r\n    <small>Data de publicação: "
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":11,"column":31},"end":{"line":11,"column":39}}}) : helper)))
    + "</small>\r\n  </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Lista de postagens:</h2>\r\n<hr>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.postagens : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['postagens/resultados'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.texto || (depth0 != null ? depth0.texto : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"texto","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":45}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card mt-4 mb-4\">\r\n  <div class=\"card-body shadow-sm\">\r\n    <h3>"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":18}}}) : helper)))
    + "</h3>\r\n     <p>"
    + alias4(((helper = (helper = helpers.descricao || (depth0 != null ? depth0.descricao : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descricao","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":21}}}) : helper)))
    + "</p>\r\n       <a href=\"/Postagem/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data,"loc":{"start":{"line":13,"column":26},"end":{"line":13,"column":34}}}) : helper)))
    + "\"><button class=\"btn btn-success\">Leia Mais</button></a>\r\n      <hr>\r\n     <small>Categoria: "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.nome : stack1), depth0))
    + "</small><br>\r\n    <small>Data de publicação: "
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":16,"column":31},"end":{"line":16,"column":39}}}) : helper)))
    + "</small>\r\n  </div>\r\n</div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "  <h5>Nenhuma Postagem</h5>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h1>Resultados:</h1>\r\n<hr>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.erros : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.postagens : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":21,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['usuarios/addpostagem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.texto || (depth0 != null ? depth0.texto : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"texto","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":45}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <option value=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":38}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.nome || (depth0 != null ? depth0.nome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nome","hash":{},"data":data,"loc":{"start":{"line":19,"column":40},"end":{"line":19,"column":48}}}) : helper)))
    + "</option>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                <option value=\"0\">Nenhuma categoria registrada</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.erros : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4>Nova Postagem: </h4>\r\n        <form action=\"/usuarios/addpostagem\" method=\"POST\" enctype=\"multipart/form-data\">\r\n             <label for=\"titulo\" class=\"mb-1 mt-1\">Título: </label>\r\n            <input type=\"text\" name=\"titulo\" class=\"form-control\" required>\r\n            <label for=\"slug\" class=\"mb-1 mt-1\">Slug: </label>\r\n            <input type=\"text\" name=\"slug\" class=\"form-control\" required>\r\n            <label for=\"descricao\" class=\"mb-1 mt-1\">Descrição: </label>\r\n            <input type=\"text\" name=\"descricao\" class=\"form-control\" required>\r\n            <label for=\"categoria\" class=\"mb-1 mt-1\">Categoria: </label>\r\n            <select name=\"categoria\" class=\"form-select\">             \r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categorias : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":18,"column":14},"end":{"line":22,"column":25}}})) != null ? stack1 : "")
    + "            </select>\r\n\r\n            <label class=\"btn btn-outline-danger mt-4\">\r\n                <input type=\"file\" name=\"documentacao\" id=\"pdf\" onchange=\"fileChanged(this)\" hidden>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-pdf\" viewBox=\"0 0 16 16\">\r\n                    <path d=\"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z\"></path>\r\n                    <path d=\"M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z\"></path>\r\n                </svg>\r\n                    Adicionar\r\n              </label>\r\n              <span class=\"fileName\">Adicione a tese</span>\r\n            <br>\r\n            \r\n            <button class=\"btn btn-success mt-4\" type=\"submit\">Criar postagem</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
},"useData":true});
templates['usuarios/editpostagens'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.texto || (depth0 != null ? depth0.texto : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"texto","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":45}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <option value=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":20,"column":31},"end":{"line":20,"column":38}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.nome || (depth0 != null ? depth0.nome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nome","hash":{},"data":data,"loc":{"start":{"line":20,"column":40},"end":{"line":20,"column":48}}}) : helper)))
    + "</option>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                <option value=\"0\">Nenhuma categoria registrada</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.erros : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4>Editar Postagem: </h4>\r\n        <form action=\"/usuarios/postagem/edit\" method=\"post\" >\r\n            <input type=\"hidden\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" name=\"id\">\r\n            <label for=\"titulo\" class=\"mb-1 mt-1\">Título: </label>\r\n            <input type=\"text\" name=\"titulo\" class=\"form-control\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.titulo : stack1), depth0))
    + "\" required>\r\n            <label for=\"slug\" class=\"mb-1 mt-1\">Slug: </label>\r\n            <input type=\"text\" name=\"slug\" class=\"form-control\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.slug : stack1), depth0))
    + "\" required>\r\n            <label for=\"descricao\" class=\"mb-1 mt-1\">Descrição: </label>\r\n            <input type=\"text\" name=\"descricao\" class=\"form-control\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.Postagem : depth0)) != null ? stack1.descricao : stack1), depth0))
    + "\" required>\r\n            <label for=\"categoria\" class=\"mb-1 mt-1\">Categoria: </label>\r\n            <select name=\"categoria\" class=\"form-select\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categorias : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":19,"column":15},"end":{"line":23,"column":25}}})) != null ? stack1 : "")
    + "            </select>\r\n            <br>\r\n            <button class=\"btn btn-success\" type=\"submit\">Editar postagem</button>\r\n            \r\n        </form>\r\n\r\n    </div>\r\n</div>";
},"useData":true});
templates['usuarios/login'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h4>Login: </h4>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <form action=\"/usuarios/login\" method=\"post\"><label for=\"email\" class=\"mb-1 mt-1\">Email: </label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" required>\r\n        <label for=\"senha\" class=\"mb-1 mt-1\">Senha</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"senha\" required> <br>\r\n        <button class=\"btn btn-success\" type=\"submit\">Entrar</button></form>\r\n    </div>\r\n</div>";
},"useData":true});
templates['usuarios/postagens'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.postagens : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + "  \r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"card mt-4\">\r\n        <div class=\"card-body\">\r\n            <h4>"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":26}}}) : helper)))
    + "</h4>\r\n            <p>Descrição:"
    + alias4(((helper = (helper = helpers.descricao || (depth0 != null ? depth0.descricao : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descricao","hash":{},"data":data,"loc":{"start":{"line":8,"column":25},"end":{"line":8,"column":38}}}) : helper)))
    + "</p>\r\n           <small>Data: "
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":32}}}) : helper)))
    + "</small><br>\r\n            <small>Categoria: "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.nome : stack1), depth0))
    + "</small><br>\r\n            <small>"
    + alias4(((helper = (helper = helpers.usuarios || (depth0 != null ? depth0.usuarios : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"usuarios","hash":{},"data":data,"loc":{"start":{"line":11,"column":19},"end":{"line":11,"column":31}}}) : helper)))
    + "</small><br> \r\n      <a href=\"/usuarios/postagens/edit/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":12,"column":40},"end":{"line":12,"column":47}}}) : helper)))
    + "\"><button class=\"btn btn-success mt-3\">Editar Postagem</button></a>\r\n      <a href=\"/usuarios/postagens/deletar/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":13,"column":43},"end":{"line":13,"column":50}}}) : helper)))
    + "\"><button class=\"btn btn-danger mt-3\">Deletar Postagem</button></a>\r\n  </div>\r\n</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.postagens : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":30,"column":9}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"card mt-4\">\r\n        <div class=\"card-body\">\r\n            <h4>"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":26}}}) : helper)))
    + "</h4>\r\n            <p>Descrição:"
    + alias4(((helper = (helper = helpers.descricao || (depth0 != null ? depth0.descricao : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descricao","hash":{},"data":data,"loc":{"start":{"line":23,"column":25},"end":{"line":23,"column":38}}}) : helper)))
    + "</p>\r\n           <small>Data: "
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":24,"column":24},"end":{"line":24,"column":32}}}) : helper)))
    + "</small><br>\r\n            <small>Categoria: "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.categoria : depth0)) != null ? stack1.nome : stack1), depth0))
    + "</small><br>\r\n            <small>"
    + alias4(((helper = (helper = helpers.usuarios || (depth0 != null ? depth0.usuarios : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"usuarios","hash":{},"data":data,"loc":{"start":{"line":26,"column":19},"end":{"line":26,"column":31}}}) : helper)))
    + "</small>\r\n    \r\n  </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Lista de postagens:</h2>\r\n<hr>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":31,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['usuarios/registro'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"alert alert-danger\"> "
    + container.escapeExpression(((helper = (helper = helpers.texto || (depth0 != null ? depth0.texto : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"texto","hash":{},"data":data,"loc":{"start":{"line":2,"column":37},"end":{"line":2,"column":46}}}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.erros : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":1},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "<h3>Crie sua conta:</h3>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <form action=\"\" method=\"post\">\r\n            <label for=\"nome\" class=\"mb-1 mt-1\">Nome:</label>\r\n                <input type=\"text\" name=\"nome\" class=\"form-control\" required>\r\n            <label for=\"email\" class=\"mb-1 mt-1\">Email:</label>\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" required>\r\n            <label for=\"senha\" class=\"mb-1 mt-1\">Senha:</label>\r\n                <input type=\"password\" name=\"senha\" class=\"form-control\" required>\r\n            <label for=\"senha2\" class=\"mb-1 mt-1\">Repita a sua senha:</label>\r\n                <input type=\"password\" name=\"senha2\" class=\"form-control\" required>\r\n            <button type=\"submit\" class=\"btn btn-success mt-4\">Criar conta</button>\r\n        </form>\r\n    </div>\r\n</div>";
},"useData":true});
})();