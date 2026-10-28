---
icon: simple/markdown
---

<div class="contact-section">
  <h1 class="contact-subtitle">Contact Me!</h1>

  <form class="contact-form" action="#" method="POST">
    
    <!-- Feld 1: Name -->
    <div class="form-group">
      <label for="name">Name<span class="required">*</span></label>
      <input type="text" id="name" name="name" placeholder="What is your name?" required>
    </div>

    <!-- Feld 2: Email -->
    <div class="form-group">
      <label for="email">Email<span class="required">*</span></label>
      <input type="email" id="email" name="email" placeholder="Where can I reach you back?" required>
    </div>

    <!-- Feld 3: Message -->
    <div class="form-group">
      <label for="message">Message<span class="required">*</span></label>
      <textarea id="message" name="message" rows="4" placeholder="Tell me!" required></textarea>
    </div>

    <!-- Buttons -->
    <button type="submit" class="btn-submit">Submit</button>
    <button type="reset" class="btn-reset">Reset</button>

  </form>
</div>
