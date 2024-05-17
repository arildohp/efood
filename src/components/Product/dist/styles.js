"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Botao = exports.Descricao = exports.Titulo = exports.Card = exports.Informacao = void 0;
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
exports.Informacao = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  gap: 0px;\n  border: \n"], ["\n  background-color: ", ";\n  gap: 0px;\n  border: \n"])), styles_1.cores.branco);
exports.Card = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 32px;\n  max-width: 472px;\n  .container {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n  }\n"], ["\n  margin-bottom: 32px;\n  max-width: 472px;\n  .container {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n  }\n"])));
exports.Titulo = styled_components_1["default"].h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 21px;\n  top: 665px;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 21.09px;\n  margin: 7px;\n"], ["\n  width: 100%;\n  height: 21px;\n  top: 665px;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 21.09px;\n  margin: 7px;\n"])));
exports.Descricao = styled_components_1["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 14px;\n  line-height: 22px;\n  display: block;\n  width: 456px;\n  height: 88px;\n  top: 702px;\n  left: 179px;\n  margim-top: 16px;\n  background-color: ", ";\n  border: ", ";\n  margin: 7px;\n"], ["\n  font-size: 14px;\n  line-height: 22px;\n  display: block;\n  width: 456px;\n  height: 88px;\n  top: 702px;\n  left: 179px;\n  margim-top: 16px;\n  background-color: ", ";\n  border: ", ";\n  margin: 7px;\n"])), styles_1.cores.branco, styles_1.cores.laranja_escuro);
exports.Botao = styled_components_1["default"].button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 82px;\n  height: 24px;\n  font-size: 14px;\n  border: none;\n  margin-top: 10px;\n  margin: 7px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 82px;\n  height: 24px;\n  font-size: 14px;\n  border: none;\n  margin-top: 10px;\n  margin: 7px;\n"])), styles_1.cores.laranja_escuro, styles_1.cores.laranja_claro);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
