import { test, expect, Page } from '@playwright/test';

test('Neg_Fun_0001: Merged input with missing spaces and vowel errors', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('subaudhasanakweva');
  await singlishInput.press('Enter');
  await expect(page.getByText('සුබ උදෑසනක් වේවා!')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0002: Agglutinated compound sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('apiheta nuwarayamuda?');
  await singlishInput.press('Enter');
  await expect(page.getByText('අපි හෙට නුවර යමුද?')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0003: Phonetic simplification of long vowels', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mata badagini kema oni');
  await singlishInput.press('Enter');
  await expect(page.getByText('මට බඩගිනි කෑම ඕනි')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0004: Dropping vowels in interrogative forms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyage nama mokkd');
  await singlishInput.press('Enter');
  await expect(page.getByText('ඔයාගේ නම මොකක්ද?')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0005: Incorrect character mapping (w vs v)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('wassa nisa yanna beha');
  await singlishInput.press('Enter');
  await expect(page.getByText('වැස්ස නිසා යන්න බැහැ')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0006: Ambiguous phonetic mapping of "ae"', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('karunakarala pana dhenna');
  await singlishInput.press('Enter');
  await expect(page.getByText('කරුණාකරලා පෑන දෙන්න')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0007: Confusion between dental and retroflex "t"', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('eka hariyata therenna');
  await singlishInput.press('Enter');
  await expect(page.getByText('ඒක හරියට තේරෙන්න')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0008: Joined proper noun and adverb', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('nimaliada karyalayata giya');
  await singlishInput.press('Enter');
  await expect(page.getByText('නිමාලි අද කාර්යාලයට ගියා')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0009: Using w instead of v in complex requests', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mataudawwak kranna puluwada?');
  await singlishInput.press('Enter');
  await expect(page.getByText('මට උදව්වක් කරන්න පුළුවන්ද?')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0010: Single vs double consonant confusion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('parisamin gedhara yana');
  await singlishInput.press('Enter');
  await expect(page.getByText('පරිස්සමින් ගෙදර යන්න')).toBeVisible({ timeout: 10000 });
});