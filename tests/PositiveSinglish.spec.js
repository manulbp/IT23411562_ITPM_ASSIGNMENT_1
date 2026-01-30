import { test, expect, Page } from '@playwright/test';

test('Pos_Fun_0001: Convert a simple future tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama heta enavaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('මම හෙට එනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0002: Translate a plural greeting response', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('api paasal yanavaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('අපි පාසල් යනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0003: Convert a simple negation sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama dhannee naee.');
  await singlishInput.press('Enter');
  await expect(page.getByText('මම දන්නේ නෑ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0004: Convert a courteous request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('anee eeka dhenna.');
  await singlishInput.press('Enter');
  await expect(page.getByText('අනේ ඒක දෙන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0005: Translate a frequent word combination', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('hariyata vaeda karanavaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('හරියට වැඩ කරනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0006: Convert a question regarding a place', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('api trip eka Kandy yamudha?');
  await singlishInput.press('Enter');
  await expect(page.getByText('අපි trip එක Kandy යමුද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0007: Currency and numeric conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('Rs. 5000 dhenna.');
  await singlishInput.press('Enter');
  await expect(page.getByText('Rs. 5000 දෙන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0008: Convert slang terms and informal emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('ela machan! supiri!!');
  await singlishInput.press('Enter');
  await expect(page.getByText('එල මචන්! සුපිරි!!')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0009: Convert a conditional complex sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyaata puLuvannam enna.');
  await singlishInput.press('Enter');
  await expect(page.getByText('ඔයාට පුළුවන්නම් එන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0010: Convert a repetition of words for emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('hari hari, mama ennam.');
  await singlishInput.press('Enter');
  await expect(page.getByText('හරි හරි, මම එන්නම්.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0011: Translate a compound sentence with saha', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama gedhara yanavaa saha passe chithrapatayak balanavaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('මම ගෙදර යනවා සහ පස්සෙ චිත්‍රපටයක් බලනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0012: Convert a polite request using question form', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
  await singlishInput.press('Enter');
  await expect(page.getByText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0013: Translate mixed input with common english words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('nimaali office enna late vennee traffic nisaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('නිමාලි office එන්න late වෙන්නේ traffic නිසා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0014: Convert mixed singlish and english brands', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('Zoom meeting ekee link eka WhatsApp karanna.');
  await singlishInput.press('Enter');
  await expect(page.getByText('Zoom meeting එකේ link එක WhatsApp කරන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0015: Convert a specific date and holiday', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('dhesaembar 25 nivaadu dhavasak vidhihata thiyenavaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('දෙසැම්බර් 25 නිවාඩු දවසක් විදිහට තියෙනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0016: Convert past and future compound structure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('eyaalaa iiyee nuvara giyaa, ehenam api heta yamudha?');
  await singlishInput.press('Enter');
  await expect(page.getByText('එයාලා ඊයේ නුවර ගියා, එහෙනම් අපි හෙට යමුද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0017: Translate multi-word food expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mata raeeta kanna bath saha parippu oonee.');
  await singlishInput.press('Enter');
  await expect(page.getByText('මට රෑට කන්න බත් සහ පරිප්පු ඕනේ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0018: Complex cause-effect sentence conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyaa enavaanam mama balan innavaa, naeththam mama yanavaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('ඔයා එනවානම් මම බලන් ඉන්නවා, නැත්තම් මම යනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0019: Convert english acronyms in singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('NIC eka saha birth certificate eka attach karalaa evanna.');
  await singlishInput.press('Enter');
  await expect(page.getByText('NIC එක සහ birth certificate එක attach කරලා එවන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0020: Convert greeting and request combination', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('aayuboovan, oyaata kohomadha? mata udhavvak karanna puLuvandha?');
  await singlishInput.press('Enter');
  await expect(page.getByText('ආයුබෝවන්, ඔයාට කොහොමද? මට උදව්වක් කරන්න පුළුවන්ද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0021: Convert input with line breaks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama gedhara yanavaa. \n oyaa enavadha maath ekka yanna?');
  await singlishInput.press('Enter');
  await expect(page.getByText('මම ගෙදර යනවා. \n ඔයා එනවද මාත් එක්ක යන්න?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0022: Convert plural imperative with emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyaalaa vahaama meheta enna!');
  await singlishInput.press('Enter');
  await expect(page.getByText('ඔයාලා වහාම මෙහෙට එන්න!')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0023: Translate past tense singular statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('eyaa iiyee gedhara giyaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('එයා ඊයේ ගෙදර ගියා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0024: Translate present tense plural statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('api dhaen vaeda karanavaa.');
  await singlishInput.press('Enter');
  await expect(page.getByText('අපි දැන් වැඩ කරනවා.')).toBeVisible({ timeout: 10000 });
});