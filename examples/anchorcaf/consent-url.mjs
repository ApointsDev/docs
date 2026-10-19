/**
 * Add Anchor Cat presentation fields to an existing, configured authorization URL.
 * The input must already contain the integration's real client_id, redirect_uri,
 * state and any other required fields. Never put credentials into this URL.
 */
export function withAnchorCatAppearance(authorizeUrl) {
  const url = new URL(authorizeUrl);
  const appearance = {
    theme: 'purple',
    color_mode: 'light',
    slogan_template: 'minimal',
    slogan_font_size_1: '40',
    slogan_font_size_2: '40',
    slogan_line_1: '**Save your attention.**',
    slogan_line_2: '敛时自处',
  };

  // No shared-size compatibility: remove this unsupported presentation field.
  url.searchParams.delete('slogan_font_size');
  for (const [key, value] of Object.entries(appearance)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}

// Browser usage: pass your existing configured OAuth URL, then navigate explicitly.
// const consentUrl = withAnchorCatAppearance(existingAuthorizeUrl);
// window.location.assign(consentUrl);
