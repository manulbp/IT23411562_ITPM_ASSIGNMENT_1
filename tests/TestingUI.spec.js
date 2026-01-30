import { test, expect, Page } from '@playwright/test';

test('Pos_UI_0001: Real time translation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('Amme mata gedhara yanna oone.');
  await singlishInput.press('Enter');
  await expect(page.getByText('අම්මෙ මට ගෙදර යන්න ඕනෙ.')).toBeVisible({ timeout: 10000 });
});