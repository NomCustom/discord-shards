# Python version for shards with discord.py 
# ( https://github.com/Rapptz/discord.py)
# View documentation of discord.py: https://discordpy.readthedocs.io/

import discord
from discord.ext import commands

bot = commands.AutoShardedBot(command_prefix="prefix")

@bot.event
async def on_ready():
  print(f"Shards activated! Number of shards: {bot.shard_count - 1}.")

bot.run(your_bot_token)
