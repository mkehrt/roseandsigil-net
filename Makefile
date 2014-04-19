.PHONY: deploy clean
deploy: clean
	scp src/* mkehrt_roseandsigil@ssh.phx.nearlyfreespeech.net:/home/public/

clean:
	- find . -name "*~" | xargs rm -f

