// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em đã dành thời gian để nhìn những trò khùng điên của anhh và anh có những điều muốn gởi gắm đến tình iu của anhh❤️. Cảm ơn em đã đến bên anhh.Cuộc sống này thực sự có thêm nhiều màu sắc và sẽ chẳng có ý nghĩa gì nếu không có em. Em làm cho anh luôn cảm thấy hạnh phúc lúc có lúc hum(thực ra vẫn là có :>>>). Anh chẳng biết nói gì ngoài lời cảm ơn em do văn có 5 điểm thoii, anh sẽ trân trọng em mãi mãi, anh rất yêu em rất chi là thưn em pé của tui lắm á. Umrchan's my own. Ps: Hin lũi rất nhìu ạ hum thế nữa đâu💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})