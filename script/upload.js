let img = document.getElementById('img');
let input = document.getElementById('input');

input.onchange = (e) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const allowedExtensions = ['.jpg', '.png'];

  if (allowedExtensions.some(ext => fileName.endsWith(ext))) {
    img.src = URL.createObjectURL(file);
  } else {
    input.value = '';
    img.src = '';
    alert('Please select a valid image file (JPG or PNG).');
  }
};
