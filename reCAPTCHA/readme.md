# reCAPTCHA v2

https://developers.google.com/recaptcha/docs/invisible


checkbox example
```html
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
     <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>
    <form action="?" method="POST">
      <div class="g-recaptcha" data-sitekey="your_site_key"></div>
      <br/>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

invisible example

```html
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
     <script src="https://www.google.com/recaptcha/api.js" async defer></script>
     <script>
       function onSubmit(token) {
         document.getElementById("demo-form").submit();
       }
     </script>
  </head>
  <body>
    <form id='demo-form' action="?" method="POST">
      <button class="g-recaptcha" data-sitekey="your_site_key" data-callback='onSubmit'>Submit</button>
      <br/>
    </form>
  </body>
</html>
```