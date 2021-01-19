function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForURL(formText)
    console.log("::: Form Submitted :::")
    postData('http://localhost:8081/addData', {ft: formText})
    updateUI()
    /*fetch('http://localhost:8081/all')
    .then(function(res) {
      try {
        return res.json()
      }catch {
      console.log("error", error);
    }
  }
    )
    .then(function(res) {
      try{
      document.getElementById('score_tag').innerHTML = res.data.score_tag;
      document.getElementById('agreement').innerHTML = res.data.agreement;
      document.getElementById('subjectivity').innerHTML = res.data.subjectivity;
      document.getElementById('confidence').innerHTML = res.data.confidence;
      document.getElementById('irony').innerHTML = res.data.irony;
    }catch {
      console.log("error", error);
    }
  })*/
}

export { handleSubmit }

// Async POST
const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};


// Update UI Elements
const updateUI = async () => {
  const request = await fetch('http://localhost:8081/all');
  try{
    const res = await request.json();
    console.log(res)
    document.getElementById('score_tag').innerHTML = res.data.score_tag;
    document.getElementById('agreement').innerHTML = res.data.agreement;
    document.getElementById('subjectivity').innerHTML = res.data.subjectivity;
    document.getElementById('confidence').innerHTML = res.data.confidence;
    document.getElementById('irony').innerHTML = res.data.irony;
  }catch(error){
    console.log("error", error);
  }
}
