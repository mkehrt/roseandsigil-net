.PHONY: deploy deploy-clean

deploy: deploy-clean
	scp -r src/* mkehrt_roseandsigil@ssh.phx.nearlyfreespeech.net:/home/public/

deploy-clean:
	- find src -name "*~" | xargs rm -f

