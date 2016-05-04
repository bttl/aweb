#! /bin/sh -e

eslint ./src/*.js

npm run build

PKG=aweb

WEBD=../web/node_modules/$PKG/

mkdir -p $WEBD

# -a archive mode; equals -rlptgoD (no -H,-A,-X)
# --delete - may delete system files if WEBD is undefined
# all extra files - remove manually
rsync \
	-av \
	--exclude=node_modules/ \
	./ ${WEBD}/
