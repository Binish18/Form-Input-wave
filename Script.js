const labels = document.querySelectorAll('label')
labels.forEach((label)=>{
   label.innerHTML = label.innerText.split('')
   .map((letter , index)=>`<span style="transition-delay:${index * 50}ms">${letter}</span>`) // into array of letters with span
   .join('') // turn back to string
   // this will separate all letters in to one letter than the other
})