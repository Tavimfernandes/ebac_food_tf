"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var formik_1 = require("formik");
var Yup = require("yup");
var react_input_mask_1 = require("react-input-mask");
var react_redux_1 = require("react-redux");
var cart_1 = require("../../store/reducers/cart");
var styles_1 = require("./styles");
var api_1 = require("../../Services/api");
var Cart = function () {
    var _a = react_redux_1.useSelector(function (state) { return state.cart; }), isOpen = _a.isOpen, isCart = _a.isCart, isDelivery = _a.isDelivery, isPayment = _a.isPayment, isConfirmation = _a.isConfirmation;
    var dispatch = react_redux_1.useDispatch();
    var itemsCart = react_redux_1.useSelector(function (state) { return state.cart.items; });
    var _b = api_1.usePurchaseMutation(), purchase = _b[0], _c = _b[1], data = _c.data, isSuccess = _c.isSuccess;
    var formataPreco = function (preco) {
        if (preco === void 0) { preco = 0; }
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(preco);
    };
    var form = formik_1.useFormik({
        initialValues: {
            name: '',
            endereco: '',
            cidade: '',
            cep: '',
            number: '',
            complemento: '',
            cardName: '',
            cardNumber: '',
            cardCode: '',
            mes: '',
            ano: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, 'Nome muito curto')
                .required('Campo obrigatório'),
            endereco: Yup.string()
                .min(5, 'Endereço muito curto')
                .required('Campo obrigatório'),
            cidade: Yup.string()
                .min(3, 'Nome da cidade muito curto')
                .required('Campo obrigatório'),
            cep: Yup.string()
                .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
                .required('Campo obrigatório'),
            number: Yup.number()
                .positive('Número inválido')
                .required('Campo obrigatório'),
            cardName: Yup.string().required('Nome no cartão obrigatório'),
            cardNumber: Yup.string()
                .matches(/^\d{16}$/, 'Número de cartão inválido (16 dígitos)')
                .required('Número do cartão obrigatório'),
            cardCode: Yup.string()
                .matches(/^\d{3}$/, 'Código inválido (3 dígitos)')
                .required('Código obrigatório'),
            mes: Yup.string()
                .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
                .required('Mês obrigatório'),
            ano: Yup.string()
                .matches(/^\d{4}$/, 'Ano inválido')
                .required('Ano obrigatório')
        }),
        onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            return __awaiter(void 0, void 0, void 0, function () {
                var response, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, 3, 4]);
                            console.log('Valores submetidos:', values);
                            setSubmitting(true);
                            return [4 /*yield*/, purchase({
                                    biling: {
                                        name: values.name
                                    },
                                    delivery: {
                                        endereco: values.endereco,
                                        cidade: values.cidade,
                                        cep: values.cep,
                                        numero: values.number,
                                        complemento: values.complemento
                                    },
                                    payment: {
                                        card: {
                                            name: values.cardName,
                                            numero: values.cardNumber,
                                            code: values.cardCode,
                                            mes: values.mes,
                                            ano: values.ano
                                        }
                                    },
                                    products: itemsCart.map(function (item) { return ({
                                        id: item.id,
                                        price: item.preco
                                    }); })
                                })];
                        case 1:
                            response = _b.sent();
                            console.log('Resposta do servidor:', response);
                            alert('Compra realizada com sucesso!');
                            return [3 /*break*/, 4];
                        case 2:
                            error_1 = _b.sent();
                            console.error('Erro no onSubmit:', error_1);
                            alert('Ocorreu um erro ao processar sua compra. Por favor, tente novamente mais tarde.');
                            return [3 /*break*/, 4];
                        case 3:
                            setSubmitting(false);
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
    });
    var finalizar = function () {
        form.handleSubmit;
        dispatch(cart_1.confirmation());
    };
    var getTotalPrice = function () {
        return itemsCart.reduce(function (acumulador, valorAtual) {
            return acumulador + valorAtual.preco;
        }, 0);
    };
    return (React.createElement(React.Fragment, null, itemsCart.length !== 0 ? (React.createElement(styles_1.CartContainer, { className: isOpen ? 'is-open' : '' },
        React.createElement(styles_1.Overlay, { onClick: function () { return dispatch(cart_1.close()); } }),
        React.createElement(styles_1.SideBar, null,
            React.createElement(styles_1.CartInfo, { id: "cart", className: isCart ? 'is-open' : '' },
                React.createElement("ul", null, itemsCart.map(function (i) { return (React.createElement(styles_1.CardItem, { key: i.id },
                    React.createElement("img", { src: i.foto, alt: "" }),
                    React.createElement("div", null,
                        React.createElement("h3", null, i.nome),
                        React.createElement("span", null,
                            "R$ ",
                            i.preco)),
                    React.createElement("button", { onClick: function () { return dispatch(cart_1.remove(i.id)); }, id: "removeCart" }))); })),
                React.createElement("div", { id: "total" },
                    "Valor Total ",
                    React.createElement("span", null, formataPreco(getTotalPrice())),
                    React.createElement("button", { onClick: function () { return dispatch(cart_1.delivery()); } }, "Continuar com a entrega"))),
            React.createElement("form", { onSubmit: form.handleSubmit },
                React.createElement(styles_1.DeliveryInfo, { id: "delivery", className: isDelivery ? 'is-open' : '' },
                    "Entrega ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("label", { htmlFor: "name" }, "Quem ir\u00E1 receber"),
                    " ",
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "name", name: "name", value: form.values.name, onChange: form.handleChange, onBlur: form.handleBlur }),
                    React.createElement("label", { htmlFor: "" }, "Endere\u00E7o"),
                    " ",
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "endereco", name: "endereco", value: form.values.endereco, onChange: form.handleChange, onBlur: form.handleBlur }),
                    React.createElement("label", { htmlFor: "" }, "Cidade"),
                    " ",
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "cidade", name: "cidade", value: form.values.cidade, onChange: form.handleChange, onBlur: form.handleBlur }),
                    React.createElement("label", { id: "labelCep", htmlFor: "" }, "CEP"),
                    React.createElement("label", { htmlFor: "" }, "Numero"),
                    React.createElement("br", null),
                    React.createElement(react_input_mask_1["default"], { mask: "99999-999", value: form.values.cep, onChange: form.handleChange, onBlur: form.handleBlur }, function () { return (React.createElement("input", { id: "cep", type: "text", name: "cep", value: form.values.cep, placeholder: "Digite seu CEP" })); }),
                    React.createElement("input", { id: "number", type: "text", name: "number", value: form.values.number, onChange: form.handleChange, onBlur: form.handleBlur }),
                    React.createElement("br", null),
                    React.createElement("label", { htmlFor: "" }, "Complemento"),
                    React.createElement("input", { id: "complemento", type: "text", value: form.values.complemento, onChange: form.handleChange, onBlur: form.handleBlur }),
                    React.createElement("button", { onClick: function () { return dispatch(cart_1.payment()); } }, "Continuar com o pagamento"),
                    React.createElement("button", { onClick: function () { return dispatch(cart_1.backCart()); } }, "Voltar para o carrinho")),
                React.createElement(styles_1.PaymentInfo, { id: "delivery", className: isPayment ? 'is-open' : '' },
                    "Pagamento - Valor a pagar ",
                    formataPreco(getTotalPrice()),
                    " ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "" }, "Nome no Cart\u00E3o"),
                        " ",
                        React.createElement("br", null)),
                    React.createElement("div", null,
                        React.createElement("input", { id: "cardName", type: "text", value: form.values.cardName, onChange: form.handleChange, onBlur: form.handleBlur })),
                    React.createElement("div", null,
                        React.createElement("label", { id: "labelCardNumber", htmlFor: "" }, "N\u00FAmero"),
                        React.createElement("label", { id: "labelCVV", htmlFor: "" }, "CVV")),
                    React.createElement("div", null,
                        React.createElement(react_input_mask_1["default"], { mask: "9999 9999 9999 9999", value: form.values.cardNumber, onChange: form.handleChange, onBlur: form.handleBlur }, function () { return (React.createElement("input", { id: "cardNumber", type: "text", name: "cardNumber", placeholder: "N\u00FAmero do cart\u00E3o" })); }),
                        React.createElement(react_input_mask_1["default"], { mask: "999", value: form.values.cardCode, onChange: form.handleChange, onBlur: form.handleBlur }, function () { return (React.createElement("input", { id: "cardCode", type: "text", name: "cardCode", placeholder: "CVV" })); })),
                    React.createElement("div", null,
                        React.createElement("label", { id: "labelMes", htmlFor: "" }, "M\u00EAs"),
                        React.createElement("label", { htmlFor: "" }, "Ano")),
                    React.createElement("div", null,
                        React.createElement(react_input_mask_1["default"], { mask: "99", value: form.values.mes, onChange: form.handleChange, onBlur: form.handleBlur }, function () { return (React.createElement("input", { id: "mes", type: "text", name: "mes", placeholder: "M\u00EAs" })); }),
                        React.createElement(react_input_mask_1["default"], { mask: "9999", value: form.values.ano, onChange: form.handleChange, onBlur: form.handleBlur }, function () { return (React.createElement("input", { id: "ano", type: "text", name: "ano", placeholder: "Ano" })); })),
                    React.createElement("br", null),
                    React.createElement("button", { onClick: finalizar }, "Finalizar Pagamento"),
                    React.createElement("button", { onClick: function () { return dispatch(cart_1.backDelivery()); } }, "Voltar para o endere\u00E7o"))),
            isSuccess ? (React.createElement(styles_1.Confirmation, { id: "delivery", className: isConfirmation ? 'is-open' : '' },
                "Pedido Realizado - ",
                data.orderId,
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("p", null,
                    "Estamos felizes em informar que seu pedido j\u00E1 est\u00E1 em processo de prepara\u00E7\u00E3o e, em breve, ser\u00E1 entregue no endere\u00E7o fornecido. ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Gostar\u00EDamos de ressaltar que nossos entregadores n\u00E3o est\u00E3o autorizados a realizar cobran\u00E7as extras.",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    " Lembre-se da import\u00E2ncia de higienizar as m\u00E3os ap\u00F3s o recebimento do pedido, garantindo assim sua seguran\u00E7a e bem-estar durante a refei\u00E7\u00E3o. ",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    "Esperamos que desfrute de uma deliciosa e agrad\u00E1vel experi\u00EAncia gastron\u00F4mica. Bom apetite!"),
                React.createElement("button", { onClick: function () { return dispatch(cart_1.concluir()); } }, "Concluir"))) : ('Ocorreu um erro, tente novamente mais tarde')))) : ('')));
};
exports["default"] = Cart;
