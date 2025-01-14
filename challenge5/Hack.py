import time
import itertools

def infinite_loading_screen():
    loading_animation=itertools.cycle(["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"])
    print("Starting the HACK... Press CTRL+C to stop.\n")
    try:
        while True:
            print(f"\rLoading {next(loading_animation)}", end="")
            time.sleep(0.1)
    except KeyboardInterrupt:
        print("\nHACK stopped!")

if __name__=="__main__":
    infinite_loading_screen()
