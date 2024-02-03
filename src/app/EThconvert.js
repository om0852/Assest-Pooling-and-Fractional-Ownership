export default async function Ethconverter() {
    let eth = await fetchEthereumPrice();
    window.addEventListener('keyup', async function (event) {
        let i = 0;
        // Check if Ctrl key and T key are pressed
        // Regular expression for checking the format ₹100 or $100
        if (event.ctrlKey && event.key === 'q') {
            // Get the selected text
            console.log(i)
            var selectedText = getSelectedText();
            if ((selectedText[0] == "$" || selectedText[0] == "₹") && selectedText.length > 0) {
                var amount = selectedText.slice(1); // Using slice to remove the dollar or rupees sign

                if (selectedText[0] == "$") {
                    let dollar = await dollarconverter();
                    alert("Eth:-  " + ((amount * dollar) / eth).toFixed(6));

                }
                else if (selectedText[0] == "₹") {
                    alert("Eth:-  " + ((amount) / eth).toFixed(6));
                }
                else {

                }
            }
            else {
            }

        }
    });

}
function getSelectedText() {
    // Get the selected text
    var selectedText = '';
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') {
        selectedText = document.selection.createRange().text;
    }
    return selectedText;
}
const fetchEthereumPrice = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
        const data = await response.json();
        return (data.ethereum.inr);
        // setEthPriceInINR(data.ethereum.inr);
    } catch (error) {
        console.error('Error fetching Ethereum price:', error);
    }
}
async function dollarconverter() {
    let Dollarprice = (await fetch("https://api.exchangerate-api.com/v4/latest/USD"));
    let price = await Dollarprice.json()
    return (price.rates["INR"])
}