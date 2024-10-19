from transformers import AutoTokenizer, AutoModelForCausalLM

# 加载模型和 tokenizer
model_name = "meta-llama/Llama-13B"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# 输入文本
input_text = "什么是机器学习？"
inputs = tokenizer(input_text, return_tensors="pt")

# 生成输出
outputs = model.generate(inputs['input_ids'], max_length=50)

# 输出结果
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
