"""Create a self-contained HTML file using Python 3 (no extra packages)."""
from pathlib import Path
import argparse, re
from urllib.parse import quote
root=Path(__file__).resolve().parent
parser=argparse.ArgumentParser()
parser.add_argument('--output',default=str(root/'PasjansPodroz_GRA.html'))
args=parser.parse_args()
html=(root/'index.html').read_text(encoding='utf-8')
css=(root/'assets/style.css').read_text(encoding='utf-8')
html=html.replace('<link rel="stylesheet" href="./assets/style.css">','<style>\n'+css+'\n</style>')
for name in ('content','engine','store','app'):
 code=(root/f'assets/{name}.js').read_text(encoding='utf-8')
 # Inline scripts wait for the DOM just like deferred external scripts.
 html=html.replace(f'<script defer src="./assets/{name}.js"></script>','')
 html=html.replace('</body>','<script>\n'+code.replace('</script','<\\/script')+'\n</script>\n</body>')
svg=(root/'assets/icon.svg').read_text(encoding='utf-8')
html=html.replace('./assets/icon.svg','data:image/svg+xml,'+quote(svg,safe=''))
out=Path(args.output);out.parent.mkdir(parents=True,exist_ok=True);out.write_text(html,encoding='utf-8')
print(out)
