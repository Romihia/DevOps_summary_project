# Dockerfile עבור Backend
FROM python:3.11

# הגדרת משתנה סביבה לעבודה עם UTF-8
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

# התקנת התלויות
COPY ./app/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# העתקת כל הקוד של היישום
COPY ./app /app

# הגדרת PYTHONPATH כך שהתיקייה /app תהיה בנתיב החיפוש של Python
ENV PYTHONPATH=/app

# חשיפת פורט 8000
EXPOSE 8000

# הרצת הסקריפט ליצירת נתונים ולאחר מכן הפעלת השרת
CMD ["sh", "-c", "python seed_data.py && uvicorn main:app --host 0.0.0.0 --port 8000 --reload"]
