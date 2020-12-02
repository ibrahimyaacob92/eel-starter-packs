import eel


@eel.expose
def hello():
    return "hello from python"


eel.init('web')
eel.start('index.html')