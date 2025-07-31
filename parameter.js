let text = document.getElementById('id');

function isPalindrome(p) {
    const reverse = p.split('').reverse().join('');
    return p === reverse;
};

text.innerHTML = isPalindrome()