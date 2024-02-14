// Resim URL'lerini içeren bir dizi
const a = document.getElementById('listingsgrid')
const image = [
    "./images/7d911d2b3a1e3fb32023a7bcc152b14e.jpg",
    // Diğer resim URL'lerini buraya ekleyebilirsiniz
  ];
  
  // API endpoint'i
  const apiEndpoint = "https://65cbd31cefec34d9ed88265e.mockapi.io/personss/people";
  
  // Resim URL'lerini API'ye post etmek için bir fonksiyon
  async function postImagesToAPI(image) {
    try {
      for (let i = 0; i < image.length; i++) {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image:image[i]
          }),
        });
  
        if (!response.ok) {
          console.error("Bir hata oluştu:", response.statusText);
        } else {
          console.log("Resim başarıyla API'ye post edildi.");
        }
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  }
  
 
  postImagesToAPI(image);
  