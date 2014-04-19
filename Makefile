.PHONY: deploy deploy-clean
deploy: deploy-clean
	scp src/* mkehrt_roseandsigil@ssh.phx.nearlyfreespeech.net:/home/public/

deploy-clean:
	- find . -name "*~" | xargs rm -f

