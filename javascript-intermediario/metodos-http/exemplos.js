/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Métodos HTTP
 * Data: 29/04/2022
 * 
 */

// HTTP -> Hyper Text Transfer Protocol
// Comunicação entre cliente-servidor
// Sempre vai existir uma request* e um response*

// Resquest
// Mensagem que o cliente envia para o servidor na requisição
// URL, dados na URL, dados de um formulário, etc
// A estrutura de um request pode ser, princialmente:
//  * URL/Endereço
//  * Cabeçalho
//      - Autenticação, segurança, etc. 
//  * Corpo

// Response
// Mensagem de resposta que o servidor envia para o cliente
// A estrutura de um response pode ser, princialmente:
//  * Código de resposta
//      - 200 : ok, sucesso
//      - 204 : não existe conteúdo para o que foi solicitado 
//      - 404, etc 
//  * Cabeçalho
//  * Corpo : lista dos produtos solicitados, por ex.

// Métodos
//  * GET   * POST  * PUT   *DELETE

// GET
// É o método mais comum de todos.
// Informações na URL.
// Não possui corpo.
// Solicitação de algum contéudo: página web, xml, json, etc.
// Exemplo: acessar um site.

// POST
// Geralmente utilizado para criar algum tipo de recurso quando não queremos enviar informações na URL .
// Informações no corpo do request.
// Solicitação de algum contéudo: página web, xml, json, etc.
// Exemplo: realizar um login (enviar login e senha), realizar cadastros... 

// PUT
// Geralmente utilizado para editar algum recurso que já existe.
// Estrutura semelhante ao POST, porém o conceito é diferente.
// Exemplo: alterar informações do seu cadastro, alterar a senha...

// DELETE
// Geralmente utilizado para remover algum recurso que já existe.
// Estrutura semelhante ao GET, não precisa enviar um corpo, pode enviar a URL, porém o conceito é diferente.
// Exemplo: alterar informações do seu cadastro, alterar a senha...
