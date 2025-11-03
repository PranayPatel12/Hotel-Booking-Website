#!/usr/bin/env bash
# usage: ./scripts/gen_inventory.sh .terraform/app_public_ip.txt ansible/hosts.ini


IP_FILE="$1"
OUT_FILE="$2"
if [[ -z "$IP_FILE" || -z "$OUT_FILE" ]]; then
echo "Usage: $0 path/to/app_public_ip.txt path/to/ansible/hosts.ini"
exit 1
fi
IP=$(cat "$IP_FILE")
cat > "$OUT_FILE" <<EOF
[app]
$IP ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa
EOF


echo "Generated inventory: $OUT_FILE -> $IP"