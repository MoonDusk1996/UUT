const caixa = document.getElementById("check");
        
        function ativarCheckbox(el) {
            el.checked = false;
        }

        
        ativarCheckbox(caixa);
        console.log("Javascript rodando")


        let touchstartX = 0
        let touchendX = 0
        
        const slider = document.getElementById('slider')
        
        function handleGesture() {
          if (touchendX < touchstartX) alert('swiped left!')
          if (touchendX > touchstartX) alert('swiped right!')
        }
        
        slider.addEventListener('touchstart', e => {
          touchstartX = e.changedTouches[0].screenX
        })
        
        slider.addEventListener('touchend', e => {
          touchendX = e.changedTouches[0].screenX
          handleGesture()
        })