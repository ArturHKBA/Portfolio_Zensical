<div class="contact-section">
  <h2>Contact</h2>
  <h1 class="contact-subtitle">Contact me!</h1>

  <form class="contact-form" action="#" method="POST">
    
    <!-- Feld 1: Name -->
    <div class="form-group">
      <label for="name">Name<span class="required">*</span></label>
      <input type="text" id="name" name="name" placeholder="Your name, your fame" required>
    </div>

    <!-- Feld 2: Email -->
    <div class="form-group">
      <label for="email">Email<span class="required">*</span></label>
      <input type="email" id="email" name="email" placeholder="Where can I reach you back?" required>
      <span class="form-hint">Temporary emails are also accepted, unless you wish to hear back 😁</span>
    </div>

    <!-- Feld 3: Message -->
    <div class="form-group">
      <label for="message">Message<span class="required">*</span></label>
      <textarea id="message" name="message" rows="4" placeholder="Your words, my inbox." required></textarea>
    </div>

    <!-- Buttons -->
    <button type="submit" class="btn-submit">Submit</button>
    <button type="reset" class="btn-reset">Reset</button>

  </form>
</div>
