#!/usr/bin/env bash
# kemaskini.sh — tarik perubahan terkini cikgukhairan.my dari GitHub ke server
# Guna: cd /var/www/cikgukhairan && bash kemaskini.sh

set -euo pipefail

echo "==> Kemas kini cikgukhairan.my"

# Pastikan kita dalam folder repo yang betul
cd "$(dirname "$0")"

# Tarik perubahan terkini dari branch main
echo "==> git pull origin main"
git fetch origin main
git reset --hard origin/main

# (pilihan) set pemilik & kebenaran fail untuk nginx — nyahkomen jika perlu
# chown -R www-data:www-data .
# find . -type d -exec chmod 755 {} \;
# find . -type f -exec chmod 644 {} \;

echo "==> Selesai. Laman dikemas kini pada: $(date '+%Y-%m-%d %H:%M:%S')"
git log --oneline -1
