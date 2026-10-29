const SRC = 'https://raw.githubusercontent.com/DevAhmedKhalil/AK-Portfolio-Website/linkedin-assets/linkedin_posts.csv';
const TZ = 'Africa/Cairo';

// Run once from the editor: loads all posts into the first sheet.
function setup() {
  const ss = SpreadsheetApp.getActive();
  ss.setSpreadsheetTimeZone(TZ);
  const sh = ss.getSheets()[0];
  sh.setName('posts');
  const rows = Utilities.parseCsv(UrlFetchApp.fetch(SRC).getContentText());
  sh.clear();
  sh.getRange('A:B').setNumberFormat('@');
  sh.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  sh.setFrozenRows(1);
  sh.getRange('E:E').setWrap(true);
  sh.setColumnWidth(5, 520);
}

// n8n calls this. No params: returns today's due queued post. action=mark: updates status + link.
function doGet(e) {
  const p = e.parameter;
  const sh = SpreadsheetApp.getActive().getSheets()[0];
  if (p.action === 'mark') {
    sh.getRange(Number(p.row), 7, 1, 2).setValues([[p.status || 'posted', p.url || '']]);
    return out({ ok: true });
  }
  const now = new Date();
  const today = Utilities.formatDate(now, TZ, 'yyyy-MM-dd');
  const hm = Utilities.formatDate(now, TZ, 'HH:mm');
  const v = sh.getDataRange().getValues();
  for (let i = 1; i < v.length; i++) {
    const d = fmt(v[i][0], 'yyyy-MM-dd');
    const t = fmt(v[i][1], 'HH:mm');
    const status = String(v[i][6]).trim().toLowerCase();
    if (d === today && t <= hm && status === 'queued') {
      return out({ found: true, row: i + 1, date: d, time: t, text: String(v[i][4]), image_url: String(v[i][5]).trim() });
    }
  }
  return out({ found: false });
}

function fmt(x, f) {
  if (x instanceof Date) return Utilities.formatDate(x, TZ, f);
  const s = String(x).trim();
  return /^\d:\d\d$/.test(s) ? '0' + s : s;
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
