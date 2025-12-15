;(function () {
  const popup = document.getElementById('paymentPopup')
  const popupText = document.getElementById('paymentPopupText')
  const closeBtn = popup && popup.querySelector('.payment-popup__close')

  // Реквізити для кожного будинку
  const paymentData = {
    1: `Березова 4а:
ТОВ «Янтар сервіс»
IBAN: UA 95 305299 00000 26008003300490
ЄДРПОУ: 40529747
Призначення платежу: адреса та особовий рахунок`,

    2: `Весела 25а:
ТОВ «Янтар сервіс»
IBAN: UA 39 305299 000000 26001033304612
ЄДРПОУ: 40529747
Призначення платежу: адреса та особовий рахунок`,

    3: `Збаразька 29а:
ТОВ «Янтар сервіс»
IBAN: UA72 305299 00000 26009013302540
ЄДРПОУ: 40529747
Призначення платежу: адреса та особовий рахунок`,

    4: `Миру 4в:
ТОВ «Янтар сервіс»
IBAN: UA27 305299 00000 26005013301255
ЄДРПОУ: 40529747
Призначення платежу: адреса та особовий рахунок`,

    5: `Замонастирська 8:
ТОВ «Янтар сервіс»
IBAN: UA 57 305299 00000 26005023302288
ЄДРПОУ: 40529747
Призначення платежу: адреса та особовий рахунок`,

  6: `Нечая 6:
ТОВ «Янтар сервіс»
IBAN: UA 34 305299 00000 26007003303562
ЄДРПОУ: 40529747
Призначення платежу: адреса та особовий рахунок`,
  }


  // Відкриття попапу при кліку на посилання
  document.querySelectorAll('.show-payment').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const id = this.dataset.paymentId
      popupText.textContent =
        paymentData[id] || 'Реквізити тимчасово недоступні'
      popup.setAttribute('aria-hidden', 'false')
      if (closeBtn) closeBtn.focus()
    })
  })

  // Закриття по хрестику
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      popup.setAttribute('aria-hidden', 'true')
    })
  }

  // Закриття по кліку поза вікном
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.setAttribute('aria-hidden', 'true')
    }
  })

  // Закриття ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') {
      popup.setAttribute('aria-hidden', 'true')
    }
  })
})()
