if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}! function(t) {
    let e = ".custom-form",
        r = ".custom-form-submit",
        o = (t = {}) => {
            e = t.formClass || e, r = t.customSubmitClass || r, t_onReady(() => {
                t_onFuncLoad("t_zeroForms__onReady", () => {
                    n()
                })
            })
        },
        n = () => {
            let t = document.querySelectorAll(e);
            if (0 === t.length) {
                console.error("[TKFORM] Не найдено ни одной формы с классом", e);
                return
            }
            let r = new Set;
            if (t.forEach(t => {
                    let e = t.closest(".t-rec");
                    e && r.add(e)
                }), 0 === r.length) {
                console.error("[TKFORM] Не найдено ни одного зеро блока с формами");
                return
            }
            i(t), s(r), a(t)
        },
        i = t => {
            t.forEach(t => t.querySelector(".tn-form__submit")?.remove())
        },
        a = t => {
            t.forEach(t => {
                Array.prototype.slice.call(t.querySelectorAll(".t-input:not(.t-inputquantity):not(.t-input-phonemask__wrap):not(.t-input-phonemask):not(.t-input__own-answer)")).forEach(function(t) {
                    t.addEventListener("blur", function(t) {
                        t.target.value ? t.target.classList.add("t-input_has-content") : t.target.classList.remove("t-input_has-content")
                    })
                })
            })
        },
        s = t => {
            t.forEach(t => {
                let o = t.querySelector(".t396__artboard"),
                    n = t.querySelectorAll(e),
                    i = t.querySelector(r);
                if (!o) return console.error("[TKFORM] Не найден элемент t396__artboard в блоке:", t), !1;
                if (0 === n.length) return console.error(`[TKFORM] Не найдено ни одной формы с классом ${e} в блоке`, t), !1;
                if (!i) return console.error(`[TKFORM] Не найдено кнопки submit с классом ${r} в блоке`, t), !1;
                let a = o.dataset.artboardRecid ? "tk-form" + o.dataset.artboardRecid : "tk-form" + Math.floor(1e5 + 9e5 * Math.random()),
                    s = document.createElement("div");
                s.innerHTML = `<form class="t-form t-form_inputs-total_2 js-form-proccess" id="${a}" name="form778879734" action="https://forms.tildacdn.com/procces/   " method="POST" role="form" data-formactiontype="2" data-inputbox=".t-input-group" data-success-callback="t396_onSuccess" data-success-popup="y" data-error-popup="y"></form>`;
                let u = s.childNodes[0];
                n.forEach(t => {
                    let e = t.querySelector("form");
                    if (!e) return console.error("[TKFORM] Не найдено формы в элементе", t), !1;
                    let r = document.createElement("div");
                    [...e.attributes].forEach(t => r.setAttribute(t.name, t.value)), r.append(...e.cloneNode(!0).childNodes), e.replaceWith(r), u.appendChild(t)
                }), u.appendChild(i), o.appendChild(u), l(u, i)
            })
        },
        l = (t, e) => {
            if (!t) return console.error("[TKFORM] Не найдено комбинированной формы, обратитесь к разработчику: bystricky@tonky-kot.ru"), !1;
            if (!e) return console.error(`[TKFORM] Не найдено кнопки submit в форме`, t), !1;

            e.setAttribute("type", "submit");
            e.setAttribute("tabindex", "0");
            e.setAttribute("onKeyDown", "tkForm.handleSubmitKeyDown(event)");
            let r = e.getAttribute("style");
            e.setAttribute("style", r + " cursor: pointer;");

            e.addEventListener("click", function handleClick(e) {
                e.preventDefault();
                e.stopPropagation();

                window.tildaForm.hideErrors(t);
                let errors = window.tildaForm.validate(t);

                if (errors.length) {
                    window.tildaForm.showErrors(t, errors);
                    return;
                }

                // Показываем стандартный успех Тильды
                if (typeof t396_onSuccess === 'function') {
                    t396_onSuccess({
                        form: t,
                        recid: t.closest('.t-rec')?.dataset['recordId'] || ''
                    });
                }

                // Закрываем попап через 3 секунды
                setTimeout(() => {
                    const popup = document.querySelector('.t-popup_opened');
                    if (popup && typeof t_onPopupClose === 'function') {
                        t_onPopupClose(popup);
                    }
                }, 3000);
            });

            e.classList.add("t-submit");

            t_onReady(function () {
                setTimeout(function () {
                    window.t_upwidget__init ? t_zeroForms__onFuncLoad("t_upwidget__init", () => e.classList.remove("t-submit")) : e.classList.remove("t-submit")
                }, 500)
            })
        };

    t.tkForm = {
        init: o,
        handleSubmitKeyDown: function t(e) {
            (13 === e.keyCode || 32 === e.keyCode) && (e.preventDefault(), e.target.dispatchEvent(new Event("click")))
        }
    }
}(window);
